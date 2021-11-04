const NewSong = require('../../Domains/song/entities/NewSong');

class AddSongUseCase {
  constructor({ songRepository, userRepository, storageHelper }) {
    this._songRepository = songRepository;
    this._userRepository = userRepository;
    this._storageHelper = storageHelper;
  }

  async execute(payload) {
    await this._userRepository.verifyRootUser(payload.credentialId);
    this._validatePayloadImage(payload.image.hapi);
    this._validatePayloadTrack(payload.track.hapi);

    const imageName = await this._storageHelper.writeFile(
      payload.image,
      payload.image.hapi
    );
    const songName = await this._storageHelper.writeFile(
      payload.track,
      payload.track.hapi
    );

    const usePayload = {
      artist: payload.artist,
      genre: payload.genre,
      imageName,
      songName,
    };
    const newSong = new NewSong(payload);
    return await this._songRepository.addSong(newSong, usePayload);
  }

  _validatePayloadImage(image) {
    var imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
    if (!imageReg.test(image.filename)) {
      throw new Error(
        'ADD_SONG_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION'
      );
    }
  }

  _validatePayloadTrack(track) {
    var trackReg = /[\/.](mp3)$/i;
    if (!trackReg.test(track.filename)) {
      throw new Error(
        'ADD_SONG_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION'
      );
    }
  }
}

module.exports = AddSongUseCase;
