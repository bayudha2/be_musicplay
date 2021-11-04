const UpdateUser = require('../../Domains/users/entities/UpdateUser');

class UpdateUserUseCase {
  constructor({ userRepository }) {
    this._userRepository = userRepository;
  }

  async execute(payload_data) {
    const updateUser = new UpdateUser(payload_data);
    await this._userRepository.checkUsernameById(updateUser);

    return await this._userRepository.updateUser(updateUser);
  }
}

module.exports = UpdateUserUseCase;
