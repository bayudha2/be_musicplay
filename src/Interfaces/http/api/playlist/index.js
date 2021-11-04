const routes = require('./routes');
const PlaylistHandler = require('./handler');

module.exports = {
  name: 'playlist',
  register: async (server, { injections }) => {
    const playlistHandler = new PlaylistHandler(injections);
    server.route(routes(playlistHandler));
  },
};
