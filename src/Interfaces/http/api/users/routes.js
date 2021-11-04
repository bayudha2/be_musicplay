const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
  },
  {
    method: 'PUT',
    path: '/users',
    handler: handler.putUserHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/users/upload/profil-image',
    handler: handler.putUserProfilHandler,
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
    method: 'PUT',
    path: '/users/upload/bg-image',
    handler: handler.putUserBgHandler,
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
