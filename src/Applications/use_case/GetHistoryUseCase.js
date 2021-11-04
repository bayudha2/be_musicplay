class GetHistoryUseCase {
  constructor({ historyRepository }) {
    this._historyRepository = historyRepository;
  }

  async execute(payload) {
    return await this._historyRepository.getHistory(payload);
  }
}

module.exports = GetHistoryUseCase;
