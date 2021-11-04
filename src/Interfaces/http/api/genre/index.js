const GenreHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'genre',
  register: async (server, { injections }) => {
    const genreHandler = new GenreHandler(injections);
    server.route(routes(genreHandler));
  },
};
