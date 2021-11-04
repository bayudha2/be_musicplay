class songHandler {
  constructor({
    addSongUseCase,
    getHomePageUseCase,
    getHomePageUserUseCase,
    getSongUseCase,
  }) {
    this._addSongUseCase = addSongUseCase;
    this._getHomePageUseCase = getHomePageUseCase;
    this._getHomePageUserUseCase = getHomePageUserUseCase;
    this._getSongUseCase = getSongUseCase;

    this.postSongHandler = this.postSongHandler.bind(this);
    this.getHomePageHandler = this.getHomePageHandler.bind(this);
    this.getSongHandler = this.getSongHandler.bind(this);
  }

  async postSongHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { artistId: artist, genreId: genre } = request.params;

    const payload = {
      credentialId,
      artist,
      genre,
      name: request.payload.name,
      plays: parseInt(request.payload.plays),
      image: request.payload.image,
      track: request.payload.track,
    };

    const addedSong = await this._addSongUseCase.execute(payload);

    const response = h.response({
      status: 'success',
      data: {
        addedSong,
      },
    });
    response.code(201);
    return response;
  }

  async getHomePageHandler(request, h) {
    if (request.headers.authorization) {
      const data = await this._getHomePageUserUseCase.execute();
      const response = h.response({
        status: 'success',
        data,
      });

      return response;
    }

    const data = await this._getHomePageUseCase.execute();
    const response = h.response({
      status: 'success',
      data,
    });

    return response;
  }

  async getSongHandler(request, h) {
    const { songId: song_id } = request.params;

    const song = await this._getSongUseCase.execute(song_id);
    const response = h.response({
      status: 'success',
      song,
    });

    return response;
  }
}

module.exports = songHandler;
