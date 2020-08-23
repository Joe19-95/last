import React, { Component } from 'react';
import './App.css';
import Cardlis from './components/cardlist/cardlist';
import Ser from './components/search/search'

class App extends Component{
  state={
    monsters:[],
    ser:"",
    count:0
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(respose=>respose.json())
    .then(users=>this.setState({monsters:users}))
  }
  changer=(event)=>{
    this.setState({ser:event.target.value})
  }
  up=()=>{
    let c=this.state.count;
    this.setState({count:c+1},()=>{console.log(this.state.count)})
    
  }
  render(){
    let ar=[...this.state.monsters]
    let q=ar.filter(item=>{
      return (item.name.toLowerCase().includes(this.state.ser))
    })
    return(
      <div className="App">
      <h1>{this.state.ser}</h1>
      <h1>{this.state.count}</h1>
      <button onClick={this.up} ></button>
      <Ser plahol="Search your Monster here" updater={this.changer}  ></Ser>
      <Cardlis mons={q}>
      </Cardlis>
      </div>
    )
  }
}

export default App;
