import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
        this.scoresJSX = this.scoresJSX.bind(this);
    }

    scoresJSX(){
        let sortedScores = this.props.scores.sort((a,b) => (a.points > b.points) ? -1 : 1)
        let jsx = sortedScores.map((score, index) => {
            return (
                <h2 className='score-scoresjsx' key={index}>{score.name}: {score.points}</h2>
            )
        })
        return jsx;
    }

    render(){
        return(
            <div className='Score'>
                <h1 className='score-title'>Current Score</h1>
                {this.scoresJSX()}
            </div>
        )
    }
}
  
export default (Score);