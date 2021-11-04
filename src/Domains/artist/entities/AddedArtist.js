class AddedArtist {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name } = payload;

    this.id = id;
    this.name = name;
  }

  _verifyPayload({ id, name }) {
    if (!id || !name) {
      throw new Error('ADDED_ARTIST.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof name !== 'string') {
      throw new Error('ADDED_ARTIST.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddedArtist;
