const AddedSong = require('../../Domains/song/entities/AddedSong');
const SongRepository = require('../../Domains/song/songRepository');

class SongRepositoryPostgres extends SongRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addSong(newSong, usePayload) {
    const { name } = newSong;
    const { artist, genre, imageName, songName } = usePayload;
    const id = `song-${this._idGenerator()}`;
    const plays = Math.floor(Math.random() * (99999 - 10000)) + 10000;
    const date = new Date().toISOString();

    const query = {
      text: 'INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, name, plays, artist, genre',
      values: [id, name, plays, date, artist, genre, imageName, songName],
    };
    const result = await this._pool.query(query);
    return new AddedSong({ ...result.rows[0] });
  }

  async getAllSong() {
    const query = {
      text: 'SELECT * FROM songs',
    };
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getSong(song_id) {
    const query = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [song_id],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }
}

module.exports = SongRepositoryPostgres;
