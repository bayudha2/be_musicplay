const routes = (handler) => [
  {
    method: 'POST',
    path: '/history/{songId}',
    handler: handler.postHistoryHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/history/{songId}',
    handler: handler.updateHistoryHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'GET',
    path: '/history',
    handler: handler.getHistoryHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
];

module.exports = routes;
