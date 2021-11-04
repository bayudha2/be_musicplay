/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    username: {
      type: 'VARCHAR(50)',
      notNull: true,
      unique: true,
    },
    password: {
      type: 'TEXT',
      notNull: true,
    },
    fullname: {
      type: 'TEXT',
      notNull: true,
    },
    profil_img_url: {
      type: 'TEXT',
    },
    bg_img_url: {
      type: 'TEXT',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
