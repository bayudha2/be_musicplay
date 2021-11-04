class AddedLike {
  constructor(payload) {
    this._verifyPayload(payload);
    const { id, owner, song_id } = payload;

    this.id = id;
    this.owner = owner;
    this.song_id = song_id;
  }

  _verifyPayload({ id, owner, song_id }) {
    if (!id || !owner || !song_id) {
      throw new Error('ADDED_LIKE.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof owner !== 'string' ||
      typeof song_id !== 'string'
    ) {
      throw new Error('ADDED_LIKE.NOT_MEET_DATA_TYPE_SPESIFICATION');
    }
  }
}

module.exports = AddedLike;
