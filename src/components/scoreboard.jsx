import React from 'react';
import classNames from 'classnames';

import { filledArray } from '../core/utils.js';
import { isAnswered } from '../core/question.js';


const Scoreboard = React.createClass({

  displayName: "Scoreboard",
  
  propTypes: {
    questionsPerRound: React.PropTypes.number.isRequired,
    questionHistory: React.PropTypes.array.isRequired
  },
  
  render: function () {

    let { questionsPerRound, questionHistory } = this.props;

    let scoreMarks = filledArray(questionsPerRound, null).map((v, i) => {
      let currentQuestion = questionHistory[i];
      let currentAnswered = (i < questionHistory.length) ?
                            isAnswered(currentQuestion) :
                            false;
      let markClasses = classNames({
        'current': i === questionHistory.length - 1,
        'unanswered': i >= questionHistory.length,
        'answered': i < questionHistory.length - 1 || currentAnswered
      });
      return (
        <span
            key={i}
            className={markClasses}
        >
          {markClasses}
        </span>
      );
    });
    
    return (
      <div className="score">
        {scoreMarks}
      </div>
    );
    
  }
  
});


export { Scoreboard as default };
