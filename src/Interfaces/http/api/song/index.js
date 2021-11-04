const SongHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'song',
  register: async (server, { injections }) => {
    const songHandler = new SongHandler(injections);
    server.route(routes(songHandler));
  },
};
