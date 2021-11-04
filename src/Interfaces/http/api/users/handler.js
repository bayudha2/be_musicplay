class UsersHandler {
  constructor({
    addUserUseCase,
    updateUserUseCase,
    updateProfilImageUseCase,
    updateBgImageUseCase,
  }) {
    this._addUserUseCase = addUserUseCase;
    this._updateUserUseCase = updateUserUseCase;
    this._updateProfilImageUseCase = updateProfilImageUseCase;
    this._updateBgImageUseCase = updateBgImageUseCase;

    this.postUserHandler = this.postUserHandler.bind(this);
    this.putUserHandler = this.putUserHandler.bind(this);
    this.putUserProfilHandler = this.putUserProfilHandler.bind(this);
    this.putUserBgHandler = this.putUserBgHandler.bind(this);
  }

  async postUserHandler(request, h) {
    const addedUser = await this._addUserUseCase.execute(request.payload);

    const response = h.response({
      status: 'success',
      data: {
        addedUser,
      },
    });
    response.code(201);
    return response;
  }

  async putUserHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const payload_data = {
      id: credentialId,
      username: request.payload.username,
      fullname: request.payload.fullname,
    };

    const updateUser = await this._updateUserUseCase.execute(
      payload_data,
      request.payload
    );

    const response = h.response({
      status: 'success',
      data: {
        updateUser,
      },
    });
    response.code(201);
    return response;
  }

  async putUserProfilHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const payload = {
      credentialId,
      img_profil: request.payload.img_profil,
    };

    const profil_img_url = await this._updateProfilImageUseCase.execute(
      payload
    );

    const response = h.response({
      status: 'success',
      data: {
        profil_img_url,
      },
    });
    response.code(201);
    return response;
  }

  async putUserBgHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    const payload = {
      credentialId,
      bg_img: request.payload.bg_img,
    };

    const bg_img_url = await this._updateBgImageUseCase.execute(payload);

    const response = h.response({
      status: 'success',
      data: {
        bg_img_url,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = UsersHandler;
