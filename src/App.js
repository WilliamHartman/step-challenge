import React, { Component } from 'react';
import './App.css';
import Score from './components/Score/Score.js';
import Table from './components/Table/Table.js';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        steps: null, 
        scores: [
          {name: 'Bill', points: 0},
          {name: 'Jackie', points: 0},
          {name: 'Larry', points: 0},
          {name: 'Laura', points: 0}
      ]
    };

}
componentDidMount() {
  axios.get('http://localhost:8084/api/getsteps')
    .then(steps => {
      let bill = 0;
      let jackie = 0;
      let laura = 0;
      let larry = 0;

      steps.data.forEach(week => {
        let arrayWeek = [
          {name: 'bill', steps: week.bill},
          {name: 'jackie', steps: week.jackie},
          {name: 'laura', steps: (week.laura * 1.5)},
          {name: 'larry', steps: week.larry}
        ];
        
        let sortedWeek = arrayWeek.sort((a,b) => (a.steps > b.steps) ? -1 : 1)
        
        sortedWeek.forEach((person, index) => {
          switch(person.name){
            case 'bill':
              bill = bill + (4 - index);
              break;
            case 'jackie':
              jackie = jackie + (4 - index);
              break;
            case 'laura':
              laura = laura + (4 - index);
              break;
            case 'larry':
              larry = larry + (4 - index);
              break;
            default:
              console.log('Error in switch statement of point setting')
          };
        })
        
      })
      let scores = [
        {name: 'Bill', points: bill},
        {name: 'Jackie', points: jackie},
        {name: 'Larry', points: larry},
        {name: 'Laura', points: laura}
    ]

      this.setState({steps: steps.data, scores: scores})
    })
}

  render() {
    return (
      <div className="App">
        <Score scores={this.state.scores}/> 
        <div className='app-div-line'/>
        <Table steps={this.state.steps} />
      </div>
    );
  }
}

export default App;