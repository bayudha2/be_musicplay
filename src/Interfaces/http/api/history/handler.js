class historyHandler {
  constructor({ addHistoryUseCase, updateHistoryUseCase, getHistoryUseCase }) {
    this._addHistoryUseCase = addHistoryUseCase;
    this._updateHistoryUseCase = updateHistoryUseCase;
    this._getHistoryUseCase = getHistoryUseCase;

    this.postHistoryHandler = this.postHistoryHandler.bind(this);
    this.updateHistoryHandler = this.updateHistoryHandler.bind(this);
    this.getHistoryHandler = this.getHistoryHandler.bind(this);
  }

  async postHistoryHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { songId: song_id } = request.params;

    const payload = {
      credentialId,
      song_id,
    };

    const addedHistory = await this._addHistoryUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        addedHistory,
      },
    });

    response.code(201);
    return response;
  }

  async updateHistoryHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const { songId: song_id } = request.params;

    const payload = {
      credentialId,
      song_id,
    };

    const updatedHistory = await this._updateHistoryUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        updatedHistory,
      },
    });

    response.code(200);
    return response;
  }

  async getHistoryHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const payload = {
      credentialId,
    };

    const allHistory = await this._getHistoryUseCase.execute(payload);
    const response = h.response({
      status: 'success',
      data: {
        allHistory,
      },
    });

    return response;
  }
}

module.exports = historyHandler;
