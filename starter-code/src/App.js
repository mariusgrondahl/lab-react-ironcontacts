import React, { Component } from 'react';
import contacts from './contacts.json';
import Actor from './Actor';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts,
    actors: [...contacts]
  }


  render() {
    console.log(this.state);

    const eachActor = this.state.actors.map((actor) => 
        <Actor src={actor.pictureUrl} name={actor.name} rating={actor.popularity}/>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Actorbase</h1>
        </header>
        {eachActor}
      </div>
    );
  }
}

export default App;
