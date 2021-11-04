const ArtistHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'artist',
  register: async (server, { injections }) => {
    const artistHandler = new ArtistHandler(injections);
    server.route(routes(artistHandler));
  },
};
