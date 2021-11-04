const InvariantError = require('../../Commons/exceptions/InvariantError');
const AddedGenre = require('../../Domains/genre/entities/AddedGenre');
const GenreRepository = require('../../Domains/genre/GenreRepository');

class GenreRepositoryPostgres extends GenreRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addGenre(newGenre, artist_id) {
    const { name } = newGenre;
    const plays = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    const id = `genre-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO genre VALUES($1, $2, $3, $4) RETURNING id, name, artist, plays',
      values: [id, name, artist_id, plays],
    };

    const result = await this._pool.query(query);
    return new AddedGenre({ ...result.rows[0] });
  }

  async updateGenreImage(genre_id, imageName) {
    const query = {
      text: 'UPDATE genre SET genre_img_url = $2 WHERE id = $1 RETURNING genre_img_url',
      values: [genre_id, imageName],
    };
    const result = await this._pool.query(query);

    return result.rows[0].genre_img_url;
  }

  async getAllGenre() {
    const query = {
      text: 'SELECT * FROM genre',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getGenreWithSongId(song_id) {
    const query = {
      text: 'SELECT genre.name FROM genre JOIN songs ON songs.genre = genre.id WHERE songs.id = $1',
      values: [song_id],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }
}

module.exports = GenreRepositoryPostgres;
