import { EventEmitter }  from 'events';

import XMQDispatcher from '../dispatcher/xmq-dispatcher.js';
import ActionTypes from '../constants/xmq-action-types.js';


const CHANGE_EVENT = 'round-change';


let questions = [];

let RoundStore = Object.assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getQuestions: function () {
    return questions;
  }
  
});

RoundStore.dispatchToken = XMQDispatcher.register(function (action) {

  switch (action.type) {

  case ActionTypes.START_ROUND:
    questions = [action.data];
    RoundStore.emitChange();
    break;
    
  case ActionTypes.POSE_QUESTION:
    questions = [...questions, action.data];
    RoundStore.emitChange();
    break;
    
  case ActionTypes.ANSWER_QUESTION:
    // Don't really like this bit
    let answeredQuestion = Object.assign({}, questions.pop(), {answer: action.data});
    questions = [...questions, answeredQuestion];
    RoundStore.emitChange();
    break;

  default:
    // nothing
  }

});


export { RoundStore as default };
