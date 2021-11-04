/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('playlist_song', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    owner: {
      type: 'VARCHAR(50)',
    },
    playlist_id: {
      type: 'VARCHAR(50)',
    },
    song_id: {
      type: 'VARCHAR(50)',
    },
  });

  pgm.addConstraint(
    'playlist_song',
    'unique_playlist_id_and_song_id',
    'UNIQUE(playlist_id, song_id)'
  );

  pgm.addConstraint(
    'playlist_song',
    'fk_playlist_song.owner_users.id',
    'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE'
  );

  pgm.addConstraint(
    'playlist_song',
    'fk_playlist_song.playlist_id_playlist.id',
    'FOREIGN KEY(playlist_id) REFERENCES playlist(id) ON DELETE CASCADE'
  );

  pgm.addConstraint(
    'playlist_song',
    'fk_playlist_song.song_id_songs.id',
    'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE'
  );
};

exports.down = (pgm) => {
  pgm.dropTable('playlist_song');
};
