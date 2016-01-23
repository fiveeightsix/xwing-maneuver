import React from 'react';
import classNames from 'classnames';

import { getLastQuestion, isAnswered, isAnsweredCorrectly } from '../core/question.js';

import Scoreboard from './scoreboard.jsx';
import Question from './question.jsx';
import Answer from './answer.jsx';


let QuizScreen = React.createClass({

  displayName: "QuizScreen",

  propTypes: {
    settings: React.PropTypes.object.isRequired,
    questionHistory: React.PropTypes.array.isRequired,
    handleNextOnClick: React.PropTypes.func.isRequired,
    handleYesOnClick: React.PropTypes.func.isRequired,
    handleNoOnClick: React.PropTypes.func.isRequired
  },

  render: function () {

    let lastQuestion = getLastQuestion(this.props.questionHistory);
    let answered = isAnswered(lastQuestion);
    let endOfQuestions = this.props.questionHistory.length >= this.props.settings.questionsPerRound;
    let yesOnClick = !answered ? this.props.handleYesOnClick : null;
    let noOnClick = !answered ? this.props.handleNoOnClick : null;
    let yesClasses = classNames({
      answered: answered,
      selected: answered && lastQuestion.answer
    });
    let noClasses = classNames({
      answered: answered,
      selected: answered && !lastQuestion.answer
    });
    
    let answer = (answered) ? (
      <Answer question={lastQuestion} />
    ) : null;

    let nextButton = (answered && !endOfQuestions) ? (
      <button
          name="Next"
          onClick={this.props.handleNextOnClick}
      >
        {"Next"}
      </button>
    ) : null;

    let endButton = (answered && endOfQuestions) ? (
      <button
          name="End quiz"
          onClick={this.props.handleEndOnClick}
      >
        {"End quiz"}
      </button>
    ) : null;
    
    return (
      <div className="quiz-screen">
        <Scoreboard
            questionsPerRound={this.props.settings.questionsPerRound}
            questionHistory={this.props.questionHistory}
        />
        <Question question={lastQuestion} />
        <button
            name="Yes"
            className={yesClasses}
            onClick={yesOnClick}
        >
          {"Yes"}
        </button>
        <button
            name="No"
            className={noClasses}
            onClick={noOnClick}
        >
          {"No"}
        </button>
        {answer}
        {nextButton}
        {endButton}
      </div>
    );
  }
  
});


export { QuizScreen as default };
