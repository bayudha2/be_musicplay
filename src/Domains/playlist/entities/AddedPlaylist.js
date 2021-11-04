class AddedPlaylist {
  constructor(payload) {
    this._verifyPayload(payload);
    const { id, name, description, owner } = payload;

    this.id = id;
    this.name = name;
    this.description = description;
    this.owner = owner;
  }

  _verifyPayload({ id, name, description, owner }) {
    if (!id || !name || !description || !owner) {
      throw new Error('ADDED_PLAYLIST.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof name !== 'string' ||
      typeof description !== 'string' ||
      typeof owner !== 'string'
    ) {
      throw new Error('ADDED_PLAYLIST.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddedPlaylist;
