const InvariantError = require('../../Commons/exceptions/InvariantError');
const AuthorizationError = require('../../Commons/exceptions/AuthorizationError');
const AddedUser = require('../../Domains/users/entities/AddedUser');
const UserRepository = require('../../Domains/users/UserRepository');

class UserRepositoryPostgres extends UserRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async verifyAvailableUsername(username) {
    const query = {
      text: 'SELECT username FROM users WHERE username = $1',
      values: [username],
    };

    const result = await this._pool.query(query);

    if (result.rowCount) {
      throw new InvariantError('username tidak tersedia');
    }
  }

  async verifyRootUser(credentialId) {
    const query = {
      text: 'SELECT id, username FROM users WHERE id = $1',
      values: [credentialId],
    };

    const result = await this._pool.query(query);

    if (result.rows[0].username !== 'root')
      throw new AuthorizationError('Forbidden Access!');
  }

  async checkUsernameById(payload) {
    const { id, username } = payload;
    const query = {
      text: 'SELECT username FROM users',
    };

    const query_real_user = {
      text: 'SELECT username FROM users WHERE id = $1',
      values: [id],
    };

    const resultUsername = await this._pool.query(query);
    const real_user = await this._pool.query(query_real_user);

    const filtered = resultUsername.rows.filter((name) => {
      return name.username !== real_user.rows[0].username;
    });

    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].username === username) {
        throw new InvariantError('username tidak tersedia');
      }
    }
  }

  async addUser(newUser) {
    const { username, password, fullname } = newUser;
    const id = `user-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO users VALUES($1, $2, $3, $4) RETURNING id, username, fullname',
      values: [id, username, password, fullname],
    };

    const result = await this._pool.query(query);
    return new AddedUser({ ...result.rows[0] });
  }

  async updateUserProfil(id, nameProfil) {
    const query = {
      text: 'UPDATE users SET profil_img_url = $1 WHERE id = $2 RETURNING profil_img_url',
      values: [nameProfil, id],
    };

    const result = await this._pool.query(query);
    return result.rows[0].profil_img_url;
  }

  async updateUserBg(id, nameBg) {
    const query = {
      text: 'UPDATE users SET bg_img_url = $1 WHERE id = $2 RETURNING bg_img_url',
      values: [nameBg, id],
    };

    const result = await this._pool.query(query);
    return result.rows[0].bg_img_url;
  }

  async updateUser(payload_data) {
    const { id, username, fullname } = payload_data;
    const query = {
      text: 'UPDATE users SET username = $2, fullname = $3 WHERE id = $1 RETURNING id, username, fullname',
      values: [id, username, fullname],
    };
    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getPasswordByUsername(username) {
    const query = {
      text: 'SELECT password FROM users WHERE username = $1',
      values: [username],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('username tidak ditemukan');
    }

    return result.rows[0].password;
  }

  async getIdByUsername(username) {
    const query = {
      text: 'SELECT id FROM users WHERE username = $1',
      values: [username],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('user tidak ditemukan');
    }

    const { id } = result.rows[0];

    return id;
  }
}

module.exports = UserRepositoryPostgres;
