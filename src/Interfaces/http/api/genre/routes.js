const routes = (handler) => [
  {
    method: 'POST',
    path: '/genre/{artistId}',
    handler: handler.postGenreHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/genre/{genreId}/upload/image',
    handler: handler.putGenreHandler,
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
];

module.exports = routes;
