const routes = require('./routes');
const LikeHandler = require('./handler');

module.exports = {
  name: 'like',
  register: async (server, { injections }) => {
    const likeHandler = new LikeHandler(injections);
    server.route(routes(likeHandler));
  },
};
