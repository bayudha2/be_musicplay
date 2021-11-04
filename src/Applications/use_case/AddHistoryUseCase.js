class AddHistoryUseCase {
  constructor({ historyRepository }) {
    this._historyRepository = historyRepository;
  }

  async execute(payload) {
    return await this._historyRepository.addHistory(payload);
  }
}

module.exports = AddHistoryUseCase;
