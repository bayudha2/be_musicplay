const FsStorage = require('../FsStorage');
const StorageHelper = require('../../../Applications/utils/StorageHelper');
const fs = require('fs');
const path = require('path');

describe('FsStorage service', () => {
  it('should instance of StorageHelper', () => {
    expect(
      new FsStorage(fs, path.resolve(__dirname, '../../../uploads/file/images'))
    ).toBeInstanceOf(StorageHelper);
  });

  //   it('shout store image correctly', () => {
  //     const data = fs.createReadStream(path.join(__dirname, `unnamed.jpeg`));
  //     const payload = {
  //       ...data,
  //       hapi: {
  //         filename: 'unnamed.jpeg',
  //         headers: {
  //           'content-disposition':
  //             'form-data; name="data"; filename="unnamed.jpeg"',
  //           'content-type': 'image/png',
  //         },
  //       },
  //     };

  //     const fsStorage = new FsStorage(
  // fs,
  // path.resolve(__dirname, '../../../uploads/file/images')
  //     );

  //     fsStorage.writeFile(payload, payload.hapi);
  //   });
});
