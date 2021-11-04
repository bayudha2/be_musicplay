class AddPlaylistSongUseCase {
  constructor({ playlistRepository }) {
    this._playlistRepository = playlistRepository;
  }

  async execute(payload) {
    await this._playlistRepository.verifyOwner(payload);
    return await this._playlistRepository.addSongToPlaylist(payload);
  }
}

module.exports = AddPlaylistSongUseCase;
