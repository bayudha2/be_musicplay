class DeleteLikeUseCase {
  constructor({ likeRepository }) {
    this._likeRepository = likeRepository;
  }

  async execute(payload) {
    await this._likeRepository.verifyOwner(payload);
    return await this._likeRepository.deleteLike(payload);
  }
}
module.exports = DeleteLikeUseCase;
