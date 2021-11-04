const AddedPlaylist = require('../../Domains/playlist/entities/AddedPlaylist');
const AddedPlaylistSong = require('../../Domains/playlist/entities/AddedPlaylistSong');
const PlaylistRepository = require('../../Domains/playlist/PlaylistRepository');
const AuthorizationError = require('../../Commons/exceptions/AuthorizationError');

class PlaylistRepositoryPostgres extends PlaylistRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addPlaylist(newPlaylist, credentialId) {
    const { name, description } = newPlaylist;
    const id = `playlist-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO playlist VALUES($1, $2, $3, $4) RETURNING id, name, description, owner',
      values: [id, name, description, credentialId],
    };

    const result = await this._pool.query(query);
    return new AddedPlaylist({ ...result.rows[0] });
  }

  async addSongToPlaylist(payload) {
    const id = `playlistsong-${this._idGenerator()}`;
    const { credentialId, playlist_id, song_id } = payload;

    const query = {
      text: 'INSERT INTO playlist_song VALUES($1, $2, $3 ,$4) RETURNING id, owner, playlist_id, song_id',
      values: [id, credentialId, playlist_id, song_id],
    };

    const result = await this._pool.query(query);
    return new AddedPlaylistSong({ ...result.rows[0] });
  }

  async verifyOwner(payload) {
    const { credentialId, playlist_id } = payload;
    const query = {
      text: 'SELECT * FROM playlist WHERE owner = $1 AND id = $2',
      values: [credentialId, playlist_id],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new AuthorizationError('Forbidden Access!');
    }
  }

  async verifyOwnerSong(payload) {
    const { credentialId, playlist_song_id } = payload;
    const query = {
      text: 'SELECT * FROM playlist_song WHERE owner = $1 AND id = $2',
      values: [credentialId, playlist_song_id],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) {
      throw new AuthorizationError('Forbidden Access!');
    }
  }

  async deletePlaylist(id) {
    const query = {
      text: 'DELETE FROM playlist WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);
  }

  async deletePlaylistSong({ playlist_song_id }) {
    const query = {
      text: 'DELETE FROM playlist_song WHERE id = $1',
      values: [playlist_song_id],
    };

    const result = await this._pool.query(query);
  }
}

module.exports = PlaylistRepositoryPostgres;
