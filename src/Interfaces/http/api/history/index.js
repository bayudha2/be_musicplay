const HistoryHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'history',
  register: async (server, { injections }) => {
    const historyHandler = new HistoryHandler(injections);
    server.route(routes(historyHandler));
  },
};
