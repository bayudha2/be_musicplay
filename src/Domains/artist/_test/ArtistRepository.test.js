const ArtistRepository = require('../ArtistRepository');

describe('ArtistRepository interdace', () => {
  it('shoud throw error when invoke abstrack behavior', async () => {
    // Arrange
    const artistRepository = new ArtistRepository();

    // Action n Assert
    await expect(artistRepository.addArtist({})).rejects.toThrowError(
      'ARTIST_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );
    await expect(artistRepository.updateArtist('')).rejects.toThrowError(
      'ARTIST_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );
    await expect(artistRepository.updateImage('')).rejects.toThrowError(
      'ARTIST_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );
  });
});
