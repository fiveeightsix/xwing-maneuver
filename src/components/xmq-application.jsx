import React from 'react';

import * as utils from '../core/utils.js';
import AppStore from '../stores/app-store.js';
import ShipStore from '../stores/ship-store.js';
import RoundStore from '../stores/round-store.js';
import * as XMQActions from '../actions/xmq-actions.js';
import XMQStates from '../constants/xmq-states.js';
import { constructQuestion, getLastQuestion } from '../core/question.js';

import StartScreen from './start-screen.jsx';
import QuizScreen from './quiz-screen.jsx';
import EndScreen from './end-screen.jsx';


function getStateFromStores() {
  return {
    settings: AppStore.getSettings(),
    questionHistory: RoundStore.getQuestions(),
    availableShips: ShipStore.getShips()
  };
}


var XMQApplication = React.createClass({

  getInitialState: function () {
    return getStateFromStores();
  },

  componentDidMount: function () {
    AppStore.addChangeListener(this.onSettingsChange);
    ShipStore.addChangeListener(this.onShipChange);
    RoundStore.addChangeListener(this.onQuestionChange);
  },

  componentWillUnmount: function () {
    AppStore.removeChangeListener(this.onSettingsChange);
    ShipStore.removeChangeListener(this.onShipChange);
    RoundStore.removeChangeListener(this.onQuestionChange);
  },

  onShipChange: function () {
    this.setState({availableShips: ShipStore.getShips()});
  },

  onSettingsChange: function () {
    this.setState({settings: AppStore.getSettings()});
  },
  
  onQuestionChange: function () {
    this.setState({questionHistory: RoundStore.getQuestions()});
  },

  toggleFilter: function (key) {
    let filters = this.state.settings.filters.map((f) => {
      return {
        name: f.name,
        selected: ((f.name === key) ? !f.selected : f.selected)
      };
    });
    XMQActions.updateFilters(filters);
  },
  
  makeFilterOnChangeHandler: function (key) {
    let handler = (event) => {
      this.toggleFilter(key);
    };
    return handler;
  },

  handleStartOnClick: function (event) {
    XMQActions.startRound(constructQuestion(this.state.availableShips));
  },
  
  handleNextOnClick: function (event) {
    XMQActions.poseQuestion(constructQuestion(this.state.availableShips));
  },

  handleYesOnClick: function (event) {
    XMQActions.answerQuestion(Object.assign({}, getLastQuestion(this.state.questionHistory)), true);
  },

  handleNoOnClick: function (event) {
    XMQActions.answerQuestion(Object.assign({}, getLastQuestion(this.state.questionHistory)), false);
  },  

  handleEndOnClick: function (event) {
    XMQActions.endRound();
  },

  handleRestartOnClick: function (event) {
    XMQActions.restartRound();
  },
  
  render: function () {
    
    let startScreen = (this.state.settings.quiz === XMQStates.PRE_QUIZ) ? (
      <StartScreen
          handleStartOnClick={this.handleStartOnClick}
          settings={this.state.settings}
          handleFilterOnChange={this.makeFilterOnChangeHandler}
      />
    ) : null;

    let quizScreen = (this.state.settings.quiz === XMQStates.IN_QUIZ) ? (
      <QuizScreen
          settings={this.state.settings}
          questionHistory={this.state.questionHistory}
          handleNextOnClick={this.handleNextOnClick}
          handleYesOnClick={this.handleYesOnClick}
          handleNoOnClick={this.handleNoOnClick}
          handleEndOnClick={this.handleEndOnClick}
      />
    ) : null;

    let endScreen = (this.state.settings.quiz === XMQStates.POST_QUIZ) ? (
      <EndScreen
          settings={this.state.settings}
          questionHistory={this.state.questionHistory}
          handleStartOnClick={this.handleRestartOnClick}
      />
    ) : null;
    
    return (
      <div className="xmq-application">
        <header className="header">
          <h1>X-Wing maneuver quiz</h1>
        </header>
        <div className="quiz">
          {startScreen}
          {quizScreen}
          {endScreen}
        </div>
      </div>
    );
  }
  
});


export { XMQApplication as default };
