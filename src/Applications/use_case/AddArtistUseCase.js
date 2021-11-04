const NewArtist = require('../../Domains/artist/entities/NewArtist');

class AddArtistUseCase {
  constructor({ artistRepository, userRepository }) {
    this._artistRepository = artistRepository;
    this._userRepository = userRepository;
  }

  async execute(payload) {
    const newArtist = new NewArtist(payload);
    await this._userRepository.verifyRootUser(payload.credentialId);
    return await this._artistRepository.addArtist(newArtist);
  }
}

module.exports = AddArtistUseCase;
