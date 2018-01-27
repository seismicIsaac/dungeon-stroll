import CreatePartyAction from '../actions/CreatePartyAction';
import MovementRequestAction from '../actions/MovementRequestAction';
import StartCombatRoundAction from '../actions/StartCombatRoundAction';

class DungeonStrollController {

  constructor(appContext) {
    this.appContext = appContext;
  }

  createPartyRequest(partyNames) {
    var action = new CreatePartyAction(partyNames);
    action.invoke(this.appContext);
  }

  createDefaultParty() {
    this.createPartyRequest(['Joel', 'Mike', 'Crow', 'Tom Servo', 'Gypsy', 'Pearl']);
  }
  
  movementRequest(movementRequest) {
    var action = new MovementRequestAction(this.appContext.state.gameId, movementRequest);
    action.invoke(this.appContext);
  }

  startDefaultCombatRound() {
    const partyActions = [{memberId: 0, action: 'ATTACK'}, {memberId: 1, action: 'ATTACK'}, {memberId: 2, action: 'ATTACK'}, {memberId: 3, action: 'ATTACK'},{memberId: 4, action: 'ATTACK'},{memberId: 5, action: 'ATTACK'}];
    this.startCombatRound(partyActions);
  }

  startCombatRound(partyActions) {
    var action = new StartCombatRoundAction(this.appContext.state.gameId, partyActions);
    action.invoke(this.appContext);
  }
}

export default DungeonStrollController;