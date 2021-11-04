class AddedHistory {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, owner, song_id, date } = payload;

    this.id = id;
    this.owner = owner;
    this.song_id = song_id;
    this.date = date;
  }

  _verifyPayload({ id, owner, song_id, date }) {
    if (!id || !owner || !song_id || !date) {
      throw new Error('ADDED_HISTORY.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof owner !== 'string' ||
      typeof song_id !== 'string' ||
      typeof date !== 'string'
    ) {
      throw new Error('ADDED_HISTORY.NOT_MEET_DATA_TYPE_SPESIFICATION');
    }
  }
}

module.exports = AddedHistory;
