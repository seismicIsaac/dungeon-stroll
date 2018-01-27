import DungeonStrollRequest from './DungeonStrollRequest';

class CreatePartyAction extends DungeonStrollRequest {

  constructor(partyNames) {
    super();
    this.partyNames = partyNames;
  }

  constructUrl() {
    return DungeonStrollRequest.baseUrl;
  }

  getMethod() {
    return 'POST';
  }

  constructPayload() {
    return { partyNames: this.partyNames };
  }
}

export default CreatePartyAction;