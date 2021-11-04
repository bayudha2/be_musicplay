const AddedArtist = require('../AddedArtist');

describe('a Added entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      name: 'psyqui',
    };

    // Action and Assert
    expect(() => new AddedArtist(payload)).toThrowError(
      'ADDED_ARTIST.NOT_CONTAIN_NEEDED_PROPERTY'
    );
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      name: 'psyqui',
    };

    // Action and Assert
    expect(() => new AddedArtist(payload)).toThrowError(
      'ADDED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION'
    );
  });

  it('should create newUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'artist-123',
      name: 'psyqui',
    };

    // Action
    const addedArtist = new AddedArtist(payload);

    // Assert
    expect(addedArtist.id).toEqual(payload.id);
    expect(addedArtist.name).toEqual(payload.name);
  });
});
