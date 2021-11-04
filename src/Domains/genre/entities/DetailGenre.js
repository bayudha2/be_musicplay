class DetailGenre {
  _mergeSongToGenre(song, genre) {
    song.map((song_item) => {
      genre.map((genre_item) => {
        if (
          song_item.artist === genre_item.artist &&
          song_item.genre === genre_item.id
        ) {
          song_item.genreName = genre_item.name;
          return song_item;
        }
      });
    });
    return song;
  }

  _mergeSongToArtist(genre, artist) {
    genre.map((genre_item) => {
      artist.map((artist_item) => {
        if (genre_item.artist === artist_item.id) {
          genre_item.artistName = artist_item.name;
          return genre_item;
        }
      });
    });
    return genre;
  }

  _putSongAtGenre(data) {
    const Electro = data.filter((elec) => {
      return elec.genreName === 'Electro';
    });
    const Pop = data.filter((po) => {
      return po.genreName === 'Pop';
    });
    const Jazz = data.filter((jaz) => {
      return jaz.genreName === 'Jazz';
    });
    const RnB = data.filter((rb) => {
      return rb.genreName === 'R&B';
    });
    const Indie = data.filter((indi) => {
      return indi.genreName === 'Indie';
    });
    const Study = data.filter((stud) => {
      return stud.genreName === 'Study';
    });
    const HipHop = data.filter((rb) => {
      return rb.genreName === 'Hip Hop';
    });
    const Chill = data.filter((chi) => {
      return chi.genreName === 'Chill';
    });

    Electro.sort((a, b) => b.plays - a.plays);
    Pop.sort((a, b) => b.plays - a.plays);
    Jazz.sort((a, b) => b.plays - a.plays);
    RnB.sort((a, b) => b.plays - a.plays);
    Indie.sort((a, b) => b.plays - a.plays);
    Study.sort((a, b) => b.plays - a.plays);
    HipHop.sort((a, b) => b.plays - a.plays);
    Chill.sort((a, b) => b.plays - a.plays);

    const payload = {
      Electro,
      Pop,
      Jazz,
      'R&B': RnB,
      Indie,
      Study,
      HipHop,
      Chill,
    };

    return payload;
  }

  _heroSong(data) {
    return data[Math.floor(Math.random() * data.length)];

    // return data.reduce((prev, current) =>
    //   prev.plays > current.plays ? prev : current
    // );
  }

  _topTrack(data) {
    const topTrack = data.sort((a, b) => b.plays - a.plays);
    return topTrack.slice(0, 10);
  }

  _moreOfWhatYouLike(data) {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
}

module.exports = DetailGenre;
