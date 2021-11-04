const routes = (handler) => [
  {
    method: 'POST',
    path: '/like/{songId}',
    handler: handler.postLikeHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/like/{songId}',
    handler: handler.deleteLikeHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'GET',
    path: '/like',
    handler: handler.getLikeHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
];

module.exports = routes;
