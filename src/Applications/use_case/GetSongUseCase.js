const DetailSong = require('../../Domains/song/entities/DetailSong');

class GetSongUseCase {
  constructor({ songRepository, genreRepository, artistRepository }) {
    this._songRepository = songRepository;
    this._genreRepository = genreRepository;
    this._artistRepository = artistRepository;
  }

  async execute(song_id) {
    const songData = await this._songRepository.getSong(song_id);
    const genre = await this._genreRepository.getGenreWithSongId(song_id);
    const artist = await this._artistRepository.getArtistWithSongId(song_id);

    const detailSong = new DetailSong();
    const addedGenre = await detailSong._mergeGenre(songData, genre);
    const addedArtist = await detailSong._mergeArtist(addedGenre, artist);

    return addedArtist;
  }
}

module.exports = GetSongUseCase;
