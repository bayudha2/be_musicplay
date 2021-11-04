const routes = (handler) => [
  {
    method: 'POST',
    path: '/playlist',
    handler: handler.postPlaylistHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'POST',
    path: '/playlist/{playlistId}/song/{songId}',
    handler: handler.postPlaylistSongHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/playlist/{playlistId}',
    handler: handler.deletePlaylistHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/playlist_song/{playlistSongId}',
    handler: handler.deletePlaylistSongHandler,
    options: {
      auth: 'musicplay_jwt',
    },
  },
];

module.exports = routes;
