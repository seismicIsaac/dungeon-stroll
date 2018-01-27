import DungeonStrollRequest from './DungeonStrollRequest';

class MovementRequestAction extends DungeonStrollRequest {
  constructor(gameId, movementRequest) {
    super();
    this.gameId = gameId;
    this.movementRequest = movementRequest;
  }

  constructUrl() {
    return DungeonStrollRequest.baseUrl + '/' + this.gameId + '/location';
  }

  getMethod() {
    return 'PUT';
  }

  constructPayload() {
    return { movementDelta: this.movementRequest };
  }
}

export default MovementRequestAction;