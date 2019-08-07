import React, { Component } from 'react';
import contacts from './contacts.json';
import Actor from './Actor';
import Navbar from './Navbar';
import Search from './Search';
import './App.css';
import './Search.css'
import {Switch, Link, Route} from 'react-router-dom';

// Removing Actors from Array so its easier to work with in Testing.
contacts.splice(15)

// Starts Component
class App extends Component {
  state = {
    contacts: contacts,
    actors: [...contacts]
  }
  // Searchfilter for all actors
  search = (event)=>{
    let searchTerm = event.target.value.toUpperCase()
    let searchedActors = [...contacts]
    searchedActors  = this.state.contacts.filter((actor)=> (
      actor.name.toUpperCase().indexOf(searchTerm) >= 0
    ))

    this.setState({actors: searchedActors})
  }

  // Deletebutton method for each actor
  remove = (index) => {
    let actorsCopy = [...this.state.actors];
    actorsCopy.splice(index, 1);
    this.setState({actors: actorsCopy});
  }

  // Setting up sort by name
  sortByName = (index) => {
    let actorsSorting = [...this.state.actors];
    actorsSorting.sort(function(a, b) {
      
    })
  }
  
  render() {
    // Before return we are sending all the props to each Actor component
    const eachActor = this.state.actors.map((actor, index) => 
        <Actor src={actor.pictureUrl} 
               name={actor.name} 
               rating={actor.popularity} 

               index={index}
               remove={this.remove}
        />
        
    );

    return (
      <div className="App">
        <Navbar />
        <Route path='/search' component={Search}/> 
          <Route path='/'>
          <div>
            <div className="Search">
                <input onChange={this.search} placeholder="Search your favorite actor" type="text"/>
            </div>
            <div className="Actor-wrapper">
              {eachActor}
            </div>
          </div>
          </Route>
      </div>
    );
  }
}

export default App;
