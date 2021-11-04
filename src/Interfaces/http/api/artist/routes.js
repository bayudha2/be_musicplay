const routes = (handler) => [
  {
    method: 'POST',
    path: '/artist',
    handler: handler.postArtistHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/artist/upload/image',
    handler: handler.putArtistHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
        output: 'stream',
        maxBytes: 800000,
      },
      auth: 'musicplay_jwt',
    },
  },
];

module.exports = routes;
