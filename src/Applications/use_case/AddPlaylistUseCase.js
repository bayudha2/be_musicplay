const NewPlaylist = require('../../Domains/playlist/entities/NewPlaylist');

class AddPlaylistUseCase {
  constructor({ playlistRepository }) {
    this._playlistRepository = playlistRepository;
  }

  async execute(payload) {
    const newPlaylist = new NewPlaylist(payload);
    return await this._playlistRepository.addPlaylist(
      newPlaylist,
      payload.credentialId
    );
  }
}

module.exports = AddPlaylistUseCase;
