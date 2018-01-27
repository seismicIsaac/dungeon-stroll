import React, { Component } from 'react';
import DayNightHeader from './DayNightHeader';
import PartyMember from './party-member/PartyMember';
import ViewPort from './main-viewport/ViewPort';
import ControlPanel from './control-panel/ControlPanel';
import './App.css';
import './Global.css';
import { calculateMapPositionUpdate, DIRECTION_NAMES } from './utils/movement-helper.js';
import { translateKeyBoardEventToDirection } from './utils/user-input';
import DungeonStrollController from './controller/DungeonStrollController';

const PARTY_ENDPOINT = 'http://localhost:8080/dungeon-stroll/game/';

class App extends Component {
  constructor(props) {
    super(props);
    this.dungeonStrollController = new DungeonStrollController(this);
    this.state = {
      gameId: 1,
      party: {
        members: [],
        visionRadius: 3
      },
      location: {
        x: 0,
        y: 0,
        facingDirection: 'north',
      },
      viewableMap: [[]],
      dateTime: {
        day: 1,
        time: 7
      }
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentDidMount() {
    this.createDefaultParty();
  }

  handleKeyDown(event) {
    this.handleMove(event.key);
  }

  handleMove(eventKey) {
    if (this.state.battleState) {
      return;
    }

    let direction = translateKeyBoardEventToDirection(eventKey);
    let facingDirection = this.state.location.facingDirection;
    if (!direction) {
      return;
    }
    let movementDelta = calculateMapPositionUpdate(facingDirection, direction);
    this.sendMovementCommand(movementDelta);
  }

  startDefaultCombatRound() {
    this.dungeonStrollController.startDefaultCombatRound(this.state.gameId);
  }

  createDefaultParty() {
    this.dungeonStrollController.createDefaultParty();
  }

  sendMovementCommand(movementDelta) {
    this.dungeonStrollController.movementRequest(movementDelta);
  }

  render() {
    let partyMembersRight = [];
    let partyMembersLeft = [];

    for (let i = 0; i < this.state.party.members.length; i++) {
      let partyMemberRenderer = this.renderPartyMember(i);
      (i % 2 === 0)
        ? partyMembersLeft.push(partyMemberRenderer) 
        : partyMembersRight.push(partyMemberRenderer);
    }

    return (
      <div className="App">
        <div className="header-container">
          <DayNightHeader dateTime={this.state.dateTime} />
        </div>
        <div className="main-view-container">
          <div className="main-view">
            <div className="party-members left">
              {partyMembersLeft}
            </div>
            <ViewPort
              battleState={this.state.battleState}
              eventState={this.state.eventState}
              viewableMap={this.state.viewableMap}
              facingDirection={this.state.location.facingDirection}
              visionRadius={this.state.party.visionRadius}
            />
            <div className="party-members right">
              {partyMembersRight}
            </div>
          </div>
        </div>
        <div className="bottom-panel-container">
          <ControlPanel 
            startCombatRoundAction={this.startDefaultCombatRound.bind(this)}
            battleState={this.state.battleState}
            eventState={this.state.eventState}
          />
        </div>
      </div>
    );
  }

  renderPartyMember(index) {
    return (
      <PartyMember
        name={this.state.party.members[index].name}
        health={this.state.party.members[index].health}
        totalHealth={this.state.party.members[index].totalHealth}
        stamina={this.state.party.members[index].stamina}
        totalStamina={this.state.party.members[index].totalStamina}
        mana={this.state.party.members[index].mana}
        totalMana={this.state.party.members[index].totalMana}
        key={index}
      />
    )
  }
}

export default App;
