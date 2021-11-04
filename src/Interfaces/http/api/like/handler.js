class LikeHandler {
  constructor({ addLikeUseCase, deleteLikeUseCase, getLikeUseCase }) {
    this._addLikeUseCase = addLikeUseCase;
    this._deleteLikeUseCase = deleteLikeUseCase;
    this._getLikeUseCase = getLikeUseCase;

    this.postLikeHandler = this.postLikeHandler.bind(this);
    this.deleteLikeHandler = this.deleteLikeHandler.bind(this);
    this.getLikeHandler = this.getLikeHandler.bind(this);
  }

  async postLikeHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { songId: song_id } = request.params;

    const payload = {
      credentialId,
      song_id,
    };

    const addedLike = await this._addLikeUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        addedLike,
      },
    });

    response.code(201);
    return response;
  }

  async deleteLikeHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { songId: song_id } = request.params;

    const payload = {
      credentialId,
      song_id,
    };

    await this._deleteLikeUseCase.execute(payload);
    return {
      status: 'success',
    };
  }

  async getLikeHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const payload = {
      credentialId,
    };

    const allLikes = await this._getLikeUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        allLikes,
      },
    });

    return response;
  }
}

module.exports = LikeHandler;
