import React, { Component } from 'react';

import AnimalList from './components/AnimalList';
import AnimalForm from './components/AnimalForm';
import Header from './components/Header';
import Homunculus from './components/Homunculus';

import './App.css';
import './components/Animals.css';

const initAnimals = [
  {name: 'Tiger', 
  id: 1,},
  {name: 'Octopus',
  id: 2},
  {name: 'Lion', 
  id: 3,},
  {name: 'Badger', 
  id: 4,},
  {name: 'Snake', 
  id: 5,},
  {name: 'Spider', 
  id: 6,},
  {name: 'Elephant', 
  id: 7,},
  {name: 'Wolf', 
  id: 8,},
  {name: 'Grasshoper', 
  id: 9,},
  {name: 'Bat', 
  id: 10,},
  {name: 'Rhino', 
  id: 11,},
  {name: 'Aardvark', 
  id: 12,},
  {name: 'Butterfly', 
  id: 13,},
  {name: 'Kangaroo', 
  id: 14,},
  {name: 'Armadillo', 
  id: 15,},
  {name: 'Buffalo', 
  id: 16,},
  {name: 'Bear', 
  id: 17,},
  {name: 'Emu', 
  id: 18,},
  {name: 'Fox', 
  id: 19,},
  {name: 'Sugar Glider', 
  id: 20,},
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      animals: initAnimals,
      inputText: '',
      homunculusAnimals: [],
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addAnimal = (e) => {
    e.preventDefault();
    if(this.state.inputText.trim() !== '' 
      && this.state.animals.every(x => x.name.toLowerCase() !== this.state.inputText.toLowerCase())
      && this.state.animals.length < 20) {
      this.setState({
        animals: [
          ...this.state.animals,
          { name: this.state.inputText,
          id: Date.now()}
        ],
        inputText: '',
      });
    }
  }

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      animals: [],
      inputText: ''
    })
  }

  homunculus = (e) => {
    e.preventDefault();
    let result = [];
    if(this.state.animals.length < 20){
        alert('Add more animals first')
    } else {
      
      for(let i = 0; i < 3; i++){
        let temp = this.state.animals[Math.floor(Math.random() * 20)]
        while(result.includes(temp)){
          temp = this.state.animals[Math.floor(Math.random() * 20)]
        }
        result.push(temp)
      }
      this.setState(prevState => ({
        homunculusAnimals: [...result]
      }))    
    }
  }

  removeAnimal = (e) => {
    this.setState({
      animals: this.state.animals.filter(x => x.name !== e.target.name)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AnimalList animals={this.state.animals} 
        removeAnimal={this.removeAnimal}
        />
        <AnimalForm 
          handleChange={this.handleChange} 
          addAnimal={this.addAnimal}
          inputText={this.state.inputText}
          clearAll={this.clearAll}
          homunculus={this.homunculus}
        />
        <Homunculus homunculusAnimals={this.state.homunculusAnimals} />
      </div>
    );
  }
}

export default App;
