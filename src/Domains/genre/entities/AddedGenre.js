class AddedGenre {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name, artist, plays } = payload;

    this.id = id;
    this.name = name;
    this.artist = artist;
    this.plays = plays;
  }

  _verifyPayload({ id, name, artist, plays }) {
    if (!id || !name || !artist || !plays) {
      throw new Error('ADDED_GENRE.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof name !== 'string' ||
      typeof artist !== 'string' ||
      typeof plays !== 'number'
    ) {
      throw new Error('ADDED_GENRE.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddedGenre;
