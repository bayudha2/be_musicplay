const InvariantError = require('./InvariantError');
const AuthenticationError = require('./AuthenticationError');
// const AuthorizationError = require('./AuthorizationError');
const NotFoundError = require('./NotFoundError');

const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

DomainErrorTranslator._directories = {
  'NEW_PLAYLIST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError(
    'tidak dapat membuat playlist baru karena properti yang dibutuhkan tidak ada'
  ),
  'NEW_USER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError(
    'tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'
  ),
  'NEW_PLAYLIST.NOT_MEET_DATA_TYPE_SPESIFICATION': new InvariantError(
    'tidak dapat membuat playlist baru karena tipe data tidak sesuai'
  ),
  'NEW_USER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError(
    'tidak dapat membuat user baru karena tipe data tidak sesuai'
  ),
  'NEW_USER.USERNAME_LIMIT_CHAR': new InvariantError(
    'tidak dapat membuat user baru karena karakter username melebihi batas limit'
  ),
  'NEW_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER': new InvariantError(
    'tidak dapat membuat user baru karena username mengandung karakter terlarang'
  ),
  'NEW_ARTIST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError(
    'tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'
  ),
  'NEW_ARTIST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError(
    'tidak dapat membuat user baru karena tipe data tidak sesuai'
  ),
  'USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError(
    'harus mengirimkan username dan password'
  ),
  'USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError(
    'username dan password harus string'
  ),
  'UPDATE_GENRE_IMAGE_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('data harus tipe gambar'),
  'ADD_SONG_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('data harus tipe gambar dan mp3'),
  'UPDATE_ARTIST_IMAGE_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('data harus tipe gambar'),
  'UPDATE_PROFIL_IMAGE_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('data harus tipe gambar'),
  'UPDATE_BG_IMAGE_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('data harus tipe gambar'),
  'UPDATE_USER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError(
    'tidak dapat mengupdate user karena properti yang dibutuhkan tidak ada'
  ),
  'UPDATE_USER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError(
    'tidak dapat membuat user baru karena tipe data tidak sesuai'
  ),
  'REFRESH_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN':
    new InvariantError('harus mengirimkan token refresh'),
  'REFRESH_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('refresh token harus string'),
  'DELETE_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN':
    new InvariantError('harus mengirimkan token refresh'),
  'DELETE_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('refresh token harus string'),

  'Missing authentication': new AuthenticationError('Missing authentication'),
  'Not Found': new NotFoundError('Not Found'),
};

module.exports = DomainErrorTranslator;
