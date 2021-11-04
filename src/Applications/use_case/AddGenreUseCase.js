const NewGenre = require('../../Domains/genre/entities/NewGenre');

class AddGenreUseCase {
  constructor({ genreRepository, userRepository }) {
    this._genreRepository = genreRepository;
    this._userRepository = userRepository;
  }

  async execute(payload) {
    const newGenre = new NewGenre(payload);
    await this._userRepository.verifyRootUser(payload.credentialId);
    return await this._genreRepository.addGenre(newGenre, payload.artist_id);
  }
}

module.exports = AddGenreUseCase;
