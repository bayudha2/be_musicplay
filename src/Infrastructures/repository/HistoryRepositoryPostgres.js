const AddedHistory = require('../../Domains/history/entities/AddedHistory');
const HistoryRepository = require('../../Domains/history/HistoryRepository');
const AuthorizationError = require('../../Commons/exceptions/AuthorizationError');

class HistoryRepositoryPostgres extends HistoryRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addHistory(payload) {
    const { credentialId, song_id } = payload;
    const date = new Date().toISOString();
    const id = `history-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO history VALUES($1, $2, $3, $4) RETURNING id, owner, song_id, date',
      values: [id, credentialId, song_id, date],
    };

    const result = await this._pool.query(query);
    return new AddedHistory({ ...result.rows[0] });
  }

  async verifyOwner(payload) {
    const { credentialId, song_id } = payload;
    const query = {
      text: 'SELECT * FROM history WHERE owner = $1 AND song_id = $2',
      values: [credentialId, song_id],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new AuthorizationError('Forbidden Access!');
    }
  }

  async updateHistory(payload) {
    const { credentialId, song_id } = payload;
    const newDate = new Date().toISOString();
    const query = {
      text: 'UPDATE history SET date = $3 WHERE owner = $1 AND song_id = $2 RETURNING id, owner, song_id, date',
      values: [credentialId, song_id, newDate],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getHistory(payload) {
    const { credentialId } = payload;
    const query = {
      text: 'SELECT * FROM history',
    };

    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = HistoryRepositoryPostgres;
