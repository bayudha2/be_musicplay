class AddLikeUseCase {
  constructor({ likeRepository }) {
    this._likeRepository = likeRepository;
  }

  async execute(payload) {
    return await this._likeRepository.addLike(payload);
  }
}

module.exports = AddLikeUseCase;
