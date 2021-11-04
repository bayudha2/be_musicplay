/* istanbul ignore file */

// external agency
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const Jwt = require('@hapi/jwt');
const pool = require('./database/postgres/pool');
const fs = require('fs');
const path = require('path');

// service (repository, helper, manager, etc)
const UserRepositoryPostgres = require('./repository/UserRepositoryPostgres');
const HistoryRepositoryPostgres = require('./repository/HistoryRepositoryPostgres');
const ArtistRepositoryPostgres = require('./repository/ArtistRepositoryPostgres');
const AuthenticationRepositoryPostgres = require('./repository/AuthenticationRepositoryPostgres');
const SongRepositoryPostgres = require('./repository/SongRepositoryPostgres');
const GenreRepositoryPostgres = require('./repository/GenreRepositoryPostgres');
const PlaylistRepositoryPostgres = require('./repository/PlaylistRepositoryPostgres');
const LikeRepositoryPostgres = require('./repository/LikeRepositpryPostgres');
const BcryptEncryptionHelper = require('./security/BcryptEncryptionHelper');
const JwtTokenManager = require('./security/JwtTokenManager');
const FsStorage = require('./utils/FsStorage');

// use case
const AddUserUseCase = require('../Applications/use_case/AddUserUseCase');
const AddHistoryUseCase = require('../Applications/use_case/AddHistoryUseCase');
const UpdateHistoryUseCase = require('../Applications/use_case/UpdateHistoryUseCase');
const UpdateProfilImageUseCase = require('../Applications/use_case/UpdateProfilImageUseCase');
const UpdateBgImageUseCase = require('../Applications/use_case/UpdateBgImageUseCase');
const UpdateUserUseCase = require('../Applications/use_case/UpdateUserUseCase');
const LoginUserUseCase = require('../Applications/use_case/LoginUserUseCase');
const RefreshAuthenticationUseCase = require('../Applications/use_case/RefreshAuthenticationUseCase');
const LogoutUserUseCase = require('../Applications/use_case/LogoutUserUseCase');
const AddArtistUseCase = require('../Applications/use_case/AddArtistUseCase');
const UpdateArtistUseCase = require('../Applications/use_case/UpdateArtistUseCase');
const AddGenreUseCase = require('../Applications/use_case/AddGenreUseCase');
const UpdateGenreImageUseCase = require('../Applications/use_case/UpdateGenreImageUseCase');
const AddSongUseCase = require('../Applications/use_case/AddSongUseCase');
const AddPlaylistUseCase = require('../Applications/use_case/AddPlaylistUseCase');
const AddPlaylistSongUseCase = require('../Applications/use_case/AddPlaylistSongUseCase');
const AddLikeUseCase = require('../Applications/use_case/AddLikeUseCase');
const GetHistoryUseCase = require('../Applications/use_case/GetHistoryUseCase');
const GetLikeUseCase = require('../Applications/use_case/GetLikeUseCase');
const GetSongUseCase = require('../Applications/use_case/GetSongUseCase');
const GetHomePageUseCase = require('../Applications/use_case/GetHomePageUseCase');
const GetHomePageUserUseCase = require('../Applications/use_case/GetHomePageUserUseCase');
const DeletePlaylistUseCase = require('../Applications/use_case/DeletePlaylistUseCase');
const DeletePlaylistSongUseCase = require('../Applications/use_case/DeletePlaylistSongUseCase');
const DeleteLikeUseCase = require('../Applications/use_case/DeleteLikeUseCase');

const serviceInstanceContainer = {
  historyRepository: new HistoryRepositoryPostgres(pool, nanoid),
  userRepository: new UserRepositoryPostgres(pool, nanoid),
  likeRepository: new LikeRepositoryPostgres(pool, nanoid),
  artistRepository: new ArtistRepositoryPostgres(pool, nanoid),
  authenticationRepository: new AuthenticationRepositoryPostgres(pool),
  genreRepository: new GenreRepositoryPostgres(pool, nanoid),
  encryptionHelper: new BcryptEncryptionHelper(bcrypt),
  authenticationTokenManager: new JwtTokenManager(Jwt.token),
  playlistRepository: new PlaylistRepositoryPostgres(pool, nanoid),
  songRepository: new SongRepositoryPostgres(pool, nanoid),
  storageHelper: new FsStorage(fs, path.resolve(__dirname, '../uploads/file')),
};

const useCaseInstanceContainer = {
  getSongUseCase: new GetSongUseCase({
    genreRepository: serviceInstanceContainer.genreRepository,
    artistRepository: serviceInstanceContainer.artistRepository,
    songRepository: serviceInstanceContainer.songRepository,
  }),
  getHomePageUserUseCase: new GetHomePageUserUseCase({
    genreRepository: serviceInstanceContainer.genreRepository,
    artistRepository: serviceInstanceContainer.artistRepository,
    songRepository: serviceInstanceContainer.songRepository,
  }),
  getHomePageUseCase: new GetHomePageUseCase({
    genreRepository: serviceInstanceContainer.genreRepository,
    artistRepository: serviceInstanceContainer.artistRepository,
    songRepository: serviceInstanceContainer.songRepository,
  }),
  getLikeUseCase: new GetLikeUseCase({
    likeRepository: serviceInstanceContainer.likeRepository,
  }),
  getHistoryUseCase: new GetHistoryUseCase({
    historyRepository: serviceInstanceContainer.historyRepository,
  }),
  addLikeUseCase: new AddLikeUseCase({
    likeRepository: serviceInstanceContainer.likeRepository,
  }),
  addPlaylistSongUseCase: new AddPlaylistSongUseCase({
    playlistRepository: serviceInstanceContainer.playlistRepository,
  }),
  addPlaylistUseCase: new AddPlaylistUseCase({
    playlistRepository: serviceInstanceContainer.playlistRepository,
  }),
  addHistoryUseCase: new AddHistoryUseCase({
    historyRepository: serviceInstanceContainer.historyRepository,
  }),
  addArtistUseCase: new AddArtistUseCase({
    userRepository: serviceInstanceContainer.userRepository,
    artistRepository: serviceInstanceContainer.artistRepository,
  }),
  addUserUseCase: new AddUserUseCase({
    userRepository: serviceInstanceContainer.userRepository,
    encryptionHelper: serviceInstanceContainer.encryptionHelper,
  }),
  addGenreUseCase: new AddGenreUseCase({
    genreRepository: serviceInstanceContainer.genreRepository,
    userRepository: serviceInstanceContainer.userRepository,
  }),
  addSongUseCase: new AddSongUseCase({
    songRepository: serviceInstanceContainer.songRepository,
    userRepository: serviceInstanceContainer.userRepository,
    storageHelper: serviceInstanceContainer.storageHelper,
  }),
  updateHistoryUseCase: new UpdateHistoryUseCase({
    historyRepository: serviceInstanceContainer.historyRepository,
  }),
  updateGenreImageUseCase: new UpdateGenreImageUseCase({
    genreRepository: serviceInstanceContainer.genreRepository,
    userRepository: serviceInstanceContainer.userRepository,
    storageHelper: serviceInstanceContainer.storageHelper,
  }),
  updateArtistUseCase: new UpdateArtistUseCase({
    userRepository: serviceInstanceContainer.userRepository,
    artistRepository: serviceInstanceContainer.artistRepository,
    storageHelper: serviceInstanceContainer.storageHelper,
  }),
  updateUserUseCase: new UpdateUserUseCase({
    userRepository: serviceInstanceContainer.userRepository,
  }),
  updateProfilImageUseCase: new UpdateProfilImageUseCase({
    userRepository: serviceInstanceContainer.userRepository,
    storageHelper: serviceInstanceContainer.storageHelper,
  }),
  updateBgImageUseCase: new UpdateBgImageUseCase({
    userRepository: serviceInstanceContainer.userRepository,
    storageHelper: serviceInstanceContainer.storageHelper,
  }),
  loginUserUseCase: new LoginUserUseCase({
    authenticationRepository: serviceInstanceContainer.authenticationRepository,
    authenticationTokenManager:
      serviceInstanceContainer.authenticationTokenManager,
    userRepository: serviceInstanceContainer.userRepository,
    encryptionHelper: serviceInstanceContainer.encryptionHelper,
  }),
  refreshAuthenticationUseCase: new RefreshAuthenticationUseCase({
    authenticationRepository: serviceInstanceContainer.authenticationRepository,
    authenticationTokenManager:
      serviceInstanceContainer.authenticationTokenManager,
  }),
  logoutUserUseCase: new LogoutUserUseCase({
    authenticationRepository: serviceInstanceContainer.authenticationRepository,
  }),
  deletePlaylistUseCase: new DeletePlaylistUseCase({
    playlistRepository: serviceInstanceContainer.playlistRepository,
  }),
  deletePlaylistSongUseCase: new DeletePlaylistSongUseCase({
    playlistRepository: serviceInstanceContainer.playlistRepository,
  }),
  deleteLikeUseCase: new DeleteLikeUseCase({
    likeRepository: serviceInstanceContainer.likeRepository,
  }),
};

// export all instance
module.exports = {
  ...serviceInstanceContainer,
  ...useCaseInstanceContainer,
};
