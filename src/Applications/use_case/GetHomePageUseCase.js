const DetailGenre = require('../../Domains/genre/entities/DetailGenre');

class GetHomePageUseCase {
  constructor({ artistRepository, genreRepository, songRepository }) {
    this._songRepository = songRepository;
    this._genreRepository = genreRepository;
    this._artistRepository = artistRepository;
  }

  async execute(payload) {
    const allGenre = await this._genreRepository.getAllGenre();
    const allSong = await this._songRepository.getAllSong();
    const allArtist = await this._artistRepository.getAllArtist();

    const detailGenre = new DetailGenre();
    const dataGenre = await detailGenre._mergeSongToGenre(allSong, allGenre);
    const dataArtist = await detailGenre._mergeSongToArtist(
      dataGenre,
      allArtist
    );

    const sortedData = await detailGenre._putSongAtGenre(dataArtist);
    return sortedData;
  }
}

module.exports = GetHomePageUseCase;
