class genreHandler {
  constructor({ addGenreUseCase, updateGenreImageUseCase }) {
    this._addGenreUseCase = addGenreUseCase;
    this._updateGenreImageUseCase = updateGenreImageUseCase;

    this.postGenreHandler = this.postGenreHandler.bind(this);
    this.putGenreHandler = this.putGenreHandler.bind(this);
  }

  async postGenreHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { artistId: artist_id } = request.params;

    const payload = {
      credentialId,
      artist_id,
      ...request.payload,
    };

    const addedGenre = await this._addGenreUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        addedGenre,
      },
    });
    response.code(201);
    return response;
  }

  async putGenreHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { genreId: genre_id } = request.params;
    const payload = {
      credentialId,
      genre_id,
      image: request.payload.genre_image,
    };

    const updatedGenre = await this._updateGenreImageUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        updatedGenre,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = genreHandler;
