class AddedPlaylistSong {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, owner, playlist_id, song_id } = payload;

    this.id = id;
    this.owner = owner;
    this.playlist_id = playlist_id;
    this.song_id = song_id;
  }

  _verifyPayload({ id, owner, playlist_id, song_id }) {
    if (!id || !playlist_id || !song_id || !owner) {
      throw new Error('ADDED_PLAYLIST_SONG.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof owner !== 'string' ||
      typeof playlist_id !== 'string' ||
      typeof song_id !== 'string'
    ) {
      throw new Error('ADDED_PLAYLIST_SONG.NOT_MEET_DATA_TYPE_SPESIFICATION');
    }
  }
}

module.exports = AddedPlaylistSong;
