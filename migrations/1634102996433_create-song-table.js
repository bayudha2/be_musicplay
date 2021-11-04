/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    plays: {
      type: 'INTEGER',
      notNull: true,
    },
    date: {
      type: 'TEXT',
      notNull: true,
    },
    artist: {
      type: 'VARCHAR(50)',
    },
    genre: {
      type: 'VARCHAR(50)',
    },
    image_url: {
      type: 'TEXT',
    },
    song_url: {
      type: 'TEXT',
    },
  });

  pgm.addConstraint(
    'songs',
    'fk_songs.artist_artist.id',
    'FOREIGN KEY(artist) REFERENCES artist(id) ON DELETE CASCADE'
  );

  pgm.addConstraint(
    'songs',
    'fk_songs.genre_genre.id',
    'FOREIGN KEY(genre) REFERENCES genre(id) ON DELETE CASCADE'
  );
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
