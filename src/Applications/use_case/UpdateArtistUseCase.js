class UpdateArtistUseCase {
  constructor({ artistRepository, userRepository, storageHelper }) {
    this._artistRepository = artistRepository;
    this._userRepository = userRepository;
    this._storageHelper = storageHelper;
  }

  async execute(payload) {
    await this._userRepository.verifyRootUser(payload.credentialId);
    this._validatePayload(payload.image.hapi);
    const imageName = await this._storageHelper.writeFile(
      payload.image,
      payload.image.hapi
    );

    return await this._artistRepository.updateImage(payload.name, imageName);
  }

  _validatePayload(image) {
    var imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
    if (!imageReg.test(image.filename)) {
      throw new Error(
        'UPDATE_ARTIST_IMAGE_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION'
      );
    }
  }
}

module.exports = UpdateArtistUseCase;
