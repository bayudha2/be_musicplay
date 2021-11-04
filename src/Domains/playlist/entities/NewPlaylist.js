class NewPlaylist {
  constructor(payload) {
    this._validatePayload(payload);
    const { name, description } = payload;

    this.name = name;
    this.description = description;
  }

  _validatePayload({ name, description }) {
    if (!name || !description) {
      throw new Error('NEW_PLAYLIST.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof description !== 'string') {
      throw new Error('NEW_PLAYLIST.NOT_MEET_DATA_TYPE_SPESIFICATION');
    }
  }
}

module.exports = NewPlaylist;
