class playlistHandler {
  constructor({
    addPlaylistUseCase,
    deletePlaylistUseCase,
    addPlaylistSongUseCase,
    deletePlaylistSongUseCase,
  }) {
    this._addPlaylistUseCase = addPlaylistUseCase;
    this._deletePlaylistUseCase = deletePlaylistUseCase;
    this._addPlaylistSongUseCase = addPlaylistSongUseCase;
    this._deletePlaylistSongUseCase = deletePlaylistSongUseCase;

    this.postPlaylistHandler = this.postPlaylistHandler.bind(this);
    this.postPlaylistSongHandler = this.postPlaylistSongHandler.bind(this);
    this.deletePlaylistHandler = this.deletePlaylistHandler.bind(this);
    this.deletePlaylistSongHandler = this.deletePlaylistSongHandler.bind(this);
  }

  async postPlaylistHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;

    const payload = {
      credentialId,
      ...request.payload,
    };

    const addedPlaylist = await this._addPlaylistUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        addedPlaylist,
      },
    });

    response.code(201);
    return response;
  }

  async postPlaylistSongHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { playlistId: playlist_id, songId: song_id } = request.params;

    const payload = {
      credentialId,
      playlist_id,
      song_id,
    };

    const addedSongFromPlaylist = await this._addPlaylistSongUseCase.execute(
      payload
    );

    const response = h.response({
      status: 'success',
      data: {
        addedSongFromPlaylist,
      },
    });
    response.code(201);
    return response;
  }

  async deletePlaylistHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { playlistId: playlist_id } = request.params;

    const payload = {
      credentialId,
      playlist_id,
    };

    await this._deletePlaylistUseCase.execute(payload);
    return {
      status: 'success',
    };
  }

  async deletePlaylistSongHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { playlistSongId: playlist_song_id } = request.params;

    const payload = {
      credentialId,
      playlist_song_id,
    };

    await this._deletePlaylistSongUseCase.execute(payload);
    return {
      status: 'success',
    };
  }
}

module.exports = playlistHandler;
