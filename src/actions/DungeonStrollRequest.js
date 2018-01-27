const headers = {
  'Accept': 'application/json',
  'Content-type': 'application/json',
}

class DungeonStrollRequest {

  invoke(context) {
    fetch(this.constructUrl(), {
      method: this.getMethod(),
      headers: headers,
      body: JSON.stringify(this.constructPayload())
    }).then(res => res.json())
      .then(res => context.setState(res));
  }

  constructUrl() { /*Override me plz */ }

  getMethod() { /*Override me plz */ }

  constructPayload() { /*Override me plz */ }

}

DungeonStrollRequest.baseUrl = 'http://localhost:8080/dungeon-stroll/game';

export default DungeonStrollRequest;