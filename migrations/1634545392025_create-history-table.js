/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('history', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    owner: {
      type: 'VARCHAR(50)',
    },
    song_id: {
      type: 'VARCHAR(50)',
    },
    date: {
      type: 'TEXT',
    },
  });

  pgm.addConstraint(
    'history',
    'history.owner_users.id',
    'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE'
  );

  pgm.addConstraint(
    'history',
    'history.song_id_songs.id',
    'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE'
  );
};

exports.down = (pgm) => {
  pgm.dropTable('history');
};
