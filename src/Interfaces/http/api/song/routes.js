const path = require('path');

const routes = (handler) => [
  {
    method: 'POST',
    path: '/song/{artistId}/genre/{genreId}',
    handler: handler.postSongHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 500000,
      },
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'GET',
    path: '/artist/{file*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../../../../uploads/file'),
      },
    },
  },
  {
    method: 'GET',
    path: '/songs/{file*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../../../../uploads/songs'),
      },
    },
  },
  {
    method: 'GET',
    path: '/song_mp3/{file*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../../../../uploads/song_mp3'),
      },
    },
  },
  {
    method: 'GET',
    path: '/home',
    handler: handler.getHomePageHandler,
  },
  {
    method: 'GET',
    path: '/song/{songId}',
    handler: handler.getSongHandler,
  },
];

module.exports = routes;
