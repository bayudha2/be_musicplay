const AddedArtist = require('../../Domains/artist/entities/AddedArtist');
const ArtistRepository = require('../../Domains/artist/ArtistRepository');

class ArtistRepositoryPostgres extends ArtistRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addArtist(newArtist) {
    const { name } = newArtist;
    const id = `artist-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO artist VALUES($1, $2) RETURNING id, name',
      values: [id, name],
    };

    const result = await this._pool.query(query);
    return new AddedArtist({ ...result.rows[0] });
  }

  async updateImage(name, imageName) {
    const query = {
      text: 'UPDATE artist SET image_url = $2 WHERE name = $1 RETURNING image_url',
      values: [name, imageName],
    };

    const result = await this._pool.query(query);
    return result.rows[0].image_url;
  }

  async getArtistWithSongId(song_id) {
    const query = {
      text: 'SELECT artist.name FROM artist JOIN songs ON songs.artist = artist.id WHERE songs.id = $1',
      values: [song_id],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getAllArtist() {
    const query = {
      text: 'SELECT * FROM artist',
    };

    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = ArtistRepositoryPostgres;
