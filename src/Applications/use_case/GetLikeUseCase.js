class GetLikeUseCase {
  constructor({ likeRepository }) {
    this._likeRepository = likeRepository;
  }

  async execute(payload) {
    return await this._likeRepository.getLike(payload);
  }
}

module.exports = GetLikeUseCase;
