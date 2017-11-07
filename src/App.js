import React, { Component } from 'react';
import PartyMember from './party-member/PartyMember';
import ViewPort from './ViewPort';
import DayNightHeader from './DayNightHeader';
import './App.css';
import { calculateMapPositionUpdate, DIRECTION_NAMES } from './utils/movement-helper.js';
import { translateKeyBoardEventToDirection } from './utils/user-input';

const PARTY_ENDPOINT = 'http://localhost:8080/dungeon-stroll/party/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      members: [],
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
    fetch(PARTY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        partyNames: ['Joel', 'Mike', 'Crow', 'Tom Servo', 'Gypsy', 'Pearl']
      })
    })
    .then(res => res.json())
    .then(res => this.setState(res.party));
  }

  handleKeyDown(event) {
    this.handleMove(translateKeyBoardEventToDirection(event.key));
  }

  handleMove(direction) {
    let facingDirection = this.state.location.facingDirection;
    if (!direction) {
      return;
    }
    let movementDelta = calculateMapPositionUpdate(facingDirection, direction);

    //TODO: Post to the dungeon-stroll-server to move =)
    fetch(PARTY_ENDPOINT + this.state.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        movementDelta: movementDelta,
        facingDirection: movementDelta.facingDirection
      })
    }).then(response => response.json())
      .then(response => this.setState(response.party));
  }

  render() {
    let partyMembersRight = [];
    let partyMembersLeft = [];

    for (let i = 0; i < this.state.members.length; i++) {
      let partyMemberRenderer = this.renderPartyMember(i);
      (i % 2 === 0) ? partyMembersLeft.push(partyMemberRenderer) : partyMembersRight.push(partyMemberRenderer);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DayNightHeader dateTime={this.state.dateTime} />
        <div className="main-view">
          <div className="party-members left">
            {partyMembersLeft}
          </div>
          <ViewPort 
            viewableMap={this.state.viewableMap}
            facingDirection={this.state.location.facingDirection}
            visionRadius={this.state.visionRadius}
          />
          <div className="party-members right">
            {partyMembersRight}
          </div>
        </div>
        <div className="map-movement-buttons">
          <div className="button-row top">
            <button className="movement-button left" onClick={() => this.handleMove(DIRECTION_NAMES.leftTurn)}>{'G'}</button>
            <button className="movement-button forward" onClick={() => this.handleMove(DIRECTION_NAMES.forward)}>{'^'}</button>
            <button className="movement-button right" onClick={() => this.handleMove(DIRECTION_NAMES.rightTurn)}>{'J'}</button>
          </div>

          <div className="button-row bottom">
            <button className="movement-button left" onClick={() => this.handleMove(DIRECTION_NAMES.left)}>{'<-'}</button>
            <button className="movement-button forward" onClick={() => this.handleMove(DIRECTION_NAMES.backward)}>{'V'}</button>
            <button className="movement-button right" onClick={() => this.handleMove(DIRECTION_NAMES.right)}>{'->'}</button>
          </div>
        </div>
      </div>
    );
  }

  renderPartyMember(index) {
    return (
      <PartyMember
        name={this.state.members[index].name}
        health={this.state.members[index].health}
        totalHealth={this.state.members[index].totalHealth}
        stamina={this.state.members[index].stamina}
        totalStamina={this.state.members[index].totalStamina}
        mana={this.state.members[index].mana}
        totalMana={this.state.members[index].totalMana}
        key={index}
      />
    )
  }
}

export default App;
