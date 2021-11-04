class UpdateBgImageUseCase {
  constructor({ userRepository, storageHelper }) {
    this._userRepository = userRepository;
    this._storageHelper = storageHelper;
  }

  async execute(payload) {
    this._validatePayload(payload.bg_img.hapi);
    const nameBg = await this._storageHelper.writeFile(
      payload.bg_img,
      payload.bg_img.hapi
    );

    return await this._userRepository.updateUserBg(
      payload.credentialId,
      nameBg
    );
  }

  _validatePayload(image) {
    var imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
    if (!imageReg.test(image.filename)) {
      throw new Error(
        'UPDATE_BG_IMAGE_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION'
      );
    }
  }
}

module.exports = UpdateBgImageUseCase;
