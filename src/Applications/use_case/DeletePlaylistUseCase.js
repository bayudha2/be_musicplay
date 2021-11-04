class DeletePlaylistUseCase {
  constructor({ playlistRepository }) {
    this._playlistRepository = playlistRepository;
  }

  async execute(payload) {
    await this._playlistRepository.verifyOwner(payload);
    await this._playlistRepository.deletePlaylist(payload.playlist_id);
  }
}

module.exports = DeletePlaylistUseCase;
