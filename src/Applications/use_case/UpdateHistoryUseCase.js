class UpdateHistoryUseCase {
  constructor({ historyRepository }) {
    this._historyRepository = historyRepository;
  }

  async execute(payload) {
    await this._historyRepository.verifyOwner(payload);
    return await this._historyRepository.updateHistory(payload);
  }
}
module.exports = UpdateHistoryUseCase;
