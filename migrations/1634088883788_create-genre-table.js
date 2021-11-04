/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('genre', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    artist: {
      type: 'VARCHAR(50)',
    },
    plays: {
      type: 'INTEGER',
      notNull: true,
    },
    genre_img_url: {
      type: 'TEXT',
    },
  });

  pgm.addConstraint(
    'genre',
    'fk_genre.artist_artist.id',
    'FOREIGN KEY(artist) REFERENCES artist(id) ON DELETE CASCADE'
  );
};

exports.down = (pgm) => {
  pgm.dropTable('genre');
};
