import React from 'react';

import * as qUtils from '../core/question.js';

import Scoreboard from './scoreboard.jsx';


const EndScreen = React.createClass({

  displayName: "EndScreen",

  propTypes: {
    settings: React.PropTypes.object.isRequired,
    questionHistory: React.PropTypes.array.isRequired,
    handleStartOnClick: React.PropTypes.func.isRequired
  },

  render: function () {

    let totalQuestions = this.props.questionHistory.length;
    let correctQuestions = this.props.questionHistory.filter((question) => {
      return qUtils.isAnsweredCorrectly(question);
    }).length;
    
    return (
      <div className="end-screen">
        <Scoreboard
            questionsPerRound={this.props.settings.questionsPerRound}
            questionHistory={this.props.questionHistory}
        />
        <div className="final-score">
          <p>
            {"You scored: "}
          </p>
          <p className="final-mark">
            {correctQuestions}{"/"}{totalQuestions}
          </p>
        </div>
        <button onClick={this.props.handleStartOnClick}>
          Start another quiz
        </button>
      </div>
    );
  }
  
});


export { EndScreen as default };
