const NewArtist = require('../NewArtist');

describe('a NewArtist entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {};

    // Action and Assert
    expect(() => new NewArtist(payload)).toThrowError(
      'NEW_ARTIST.NOT_CONTAIN_NEEDED_PROPERTY'
    );
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      name: 123,
    };

    // Action and Assert
    expect(() => new NewArtist(payload)).toThrowError(
      'NEW_ARTIST.NOT_MEET_DATA_TYPE_SPECIFICATION'
    );
  });

  it('should create newArtist object correctly', () => {
    // Arrange
    const payload = {
      name: 'psyqui',
    };

    // Action
    const { name } = new NewArtist(payload);

    // Assert
    expect(name).toEqual(payload.name);
  });
});
