class DetailSong {
  _mergeGenre(song, genre) {
    const songData = {
      ...song,
      genreName: genre.name,
    };

    return songData;
  }

  _mergeArtist(song, artist) {
    const songData = {
      ...song,
      artistName: artist.name,
    };

    return songData;
  }
}

module.exports = DetailSong;
