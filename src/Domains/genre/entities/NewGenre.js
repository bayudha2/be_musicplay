class NewGenre {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, plays } = payload;

    this.name = name;
    this.plays = plays;
  }

  _verifyPayload({ name, plays }) {
    if (!name || !plays) {
      throw new Error('NEW_GENRE.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof plays !== 'number') {
      throw new Error('NEW_GENRE.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = NewGenre;
