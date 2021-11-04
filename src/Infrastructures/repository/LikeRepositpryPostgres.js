const AddedLike = require('../../Domains/like/entities/AddedLike');
const LikeRepository = require('../../Domains/like/LikeRepository');
const AuthorizationError = require('../../Commons/exceptions/AuthorizationError');

class LikeRepositoryPostgres extends LikeRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addLike(payload) {
    const { credentialId, song_id } = payload;
    const id = `like-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO likes VALUES($1, $2, $3) RETURNING id, owner, song_id',
      values: [id, credentialId, song_id],
    };
    const result = await this._pool.query(query);
    return new AddedLike({ ...result.rows[0] });
  }

  async verifyOwner(payload) {
    const { credentialId, song_id } = payload;

    const query = {
      text: 'SELECT * FROM likes WHERE owner = $1 AND song_id = $2',
      values: [credentialId, song_id],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new AuthorizationError('Forbidden Access!');
    }
  }

  async getLike(payload) {
    const { credentialId } = payload;
    const query = {
      text: 'select * from likes',
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async deleteLike(payload) {
    const { credentialId, song_id } = payload;

    const query = {
      text: 'DELETE FROM likes WHERE owner =$1 AND song_id= $2',
      values: [credentialId, song_id],
    };

    const result = await this._pool.query(query);
  }
}

module.exports = LikeRepositoryPostgres;
