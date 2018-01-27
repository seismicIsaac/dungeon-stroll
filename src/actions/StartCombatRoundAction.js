import DungeonStrollRequest from './DungeonStrollRequest';

class StartCombatRoundAction extends DungeonStrollRequest {

  constructor(gameId, partyActions) {
    super();
    this.gameId = gameId;
    this.partyActions = partyActions;
  }

  constructUrl() {
    return DungeonStrollRequest.baseUrl + '/' + this.gameId + '/battle';
  }

  getMethod() {
    return 'PUT';
  }

  constructPayload() {
    return { partyActions: this.partyActions };
  }
}

export default StartCombatRoundAction;