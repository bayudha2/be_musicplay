class ArtistHandler {
  constructor({ addArtistUseCase, updateArtistUseCase }) {
    this._addArtistUseCase = addArtistUseCase;
    this._updateArtistUseCase = updateArtistUseCase;

    this.postArtistHandler = this.postArtistHandler.bind(this);
    this.putArtistHandler = this.putArtistHandler.bind(this);
  }

  async postArtistHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const payload = {
      credentialId,
      ...request.payload,
    };

    const addedArtist = await this._addArtistUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        addedArtist,
      },
    });
    response.code(201);
    return response;
  }

  async putArtistHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const payload = {
      credentialId,
      name: request.payload.name,
      image: request.payload.image,
    };
    const updatedArtist = await this._updateArtistUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        updatedArtist,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = ArtistHandler;
