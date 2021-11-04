class PlaylistRepository {
  async addPlaylist(newPlaylist) {
    throw new Error('PLAYLIST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyOwner(id) {
    throw new Error('PLAYLIST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyOwnerSong(id) {
    throw new Error('PLAYLIST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async addSongToPlaylist(id) {
    throw new Error('PLAYLIST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async deletePlaylist(id) {
    throw new Error('PLAYLIST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async deletePlaylistSong(id) {
    throw new Error('PLAYLIST_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = PlaylistRepository;
