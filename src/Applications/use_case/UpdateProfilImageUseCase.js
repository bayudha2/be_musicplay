class UpdateProfilImageUseCase {
  constructor({ userRepository, storageHelper }) {
    this._userRepository = userRepository;
    this._storageHelper = storageHelper;
  }

  async execute(payload) {
    this._validatePayload(payload.img_profil.hapi);
    const nameProfil = await this._storageHelper.writeFile(
      payload.img_profil,
      payload.img_profil.hapi
    );

    return await this._userRepository.updateUserProfil(
      payload.credentialId,
      nameProfil
    );
  }

  _validatePayload(image) {
    var imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
    if (!imageReg.test(image.filename)) {
      throw new Error(
        'UPDATE_PROFIL_IMAGE_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION'
      );
    }
  }
}

module.exports = UpdateProfilImageUseCase;
