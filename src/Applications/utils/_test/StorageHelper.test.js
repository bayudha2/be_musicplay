const StorageHelper = require('../StorageHelper');

describe('StorageHelper interface', () => {
  it('should throw error when invoke unimplemented method', async () => {
    // Arrange
    const storageHelper = new StorageHelper();

    // Action & Assert
    await expect(storageHelper.writeFile('')).rejects.toThrowError(
      'STORAGE_HELPER.METHOD_NOT_IMPLEMENTED'
    );
  });
});
