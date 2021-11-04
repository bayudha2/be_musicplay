const UpdateUser = require('../UpdateUser');

describe('a UpdateUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'ssss',
    };

    // Action and Assert
    expect(() => new UpdateUser(payload)).toThrowError(
      'UPDATE_USER.NOT_CONTAIN_NEEDED_PROPERTY'
    );
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 'asd',
      username: 'ssss',
      fullname: {},
    };

    // Action and Assert
    expect(() => new UpdateUser(payload)).toThrowError(
      'UPDATE_USER.NOT_MEET_DATA_TYPE_SPECIFICATION'
    );
  });

  it('should create newUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      username: 'kagome',
      fullname: 'kagome gome',
    };

    // Action
    const addedUser = new UpdateUser(payload);

    // Assert
    expect(addedUser.id).toEqual(payload.id);
    expect(addedUser.username).toEqual(payload.username);
    expect(addedUser.fullname).toEqual(payload.fullname);
  });
});
