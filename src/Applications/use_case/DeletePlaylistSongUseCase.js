class DeletePlaylistSongUseCase {
  constructor({ playlistRepository }) {
    this._playlistRepository = playlistRepository;
  }

  async execute(payload) {
    await this._playlistRepository.verifyOwnerSong(payload);
    await this._playlistRepository.deletePlaylistSong(payload);
  }
}

module.exports = DeletePlaylistSongUseCase;
