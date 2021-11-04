class AddedSong {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name, plays, artist, genre } = payload;

    this.id = id;
    this.name = name;
    this.plays = plays;
    this.artist = artist;
    this.genre = genre;
  }

  _verifyPayload({ id, name, plays, artist, genre }) {
    if (!id || !name || !artist || !plays || !genre) {
      throw new Error('ADDED_SONG.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof name !== 'string' ||
      typeof artist !== 'string' ||
      typeof plays !== 'number' ||
      typeof genre !== 'string'
    ) {
      throw new Error('ADDED_SONG.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddedSong;
