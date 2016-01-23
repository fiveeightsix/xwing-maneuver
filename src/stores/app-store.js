import { EventEmitter } from 'events';

import XMQDispatcher from '../dispatcher/xmq-dispatcher.js';
import ActionTypes from '../constants/xmq-action-types.js';
import XMQStates from '../constants/xmq-states.js';
import { FACTIONS } from '../constants/maps.js';

import xws from '../xws/xws.js';
import * as utils from '../core/utils.js';


function getInitialFactionFilters() {
  return FACTIONS.map((f) => { return {name: f, selected: true}; });
}


const CHANGE_EVENT = 'settings-change';


let settings = {
  filters: getInitialFactionFilters(),
  questionsPerRound: 10,
  quiz: XMQStates.PRE_QUIZ
};

let AppStore = Object.assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getSettings: function () {
    return settings;
  }
  
});

AppStore.dispatchToken = XMQDispatcher.register(function (action) {

  switch (action.type) {

  case ActionTypes.UPDATE_FILTERS:
    settings.filters = [...action.data];
    AppStore.emitChange();
    break;

  case ActionTypes.START_ROUND:
    settings.quiz = XMQStates.IN_QUIZ;
    AppStore.emitChange();
    break;

  case ActionTypes.END_ROUND:
    settings.quiz = XMQStates.POST_QUIZ;
    AppStore.emitChange();
    break;
    
  case ActionTypes.ANSWER_QUESTION:
    AppStore.emitChange();
    break;

  case ActionTypes.RESTART_ROUND:
    settings.quiz = XMQStates.PRE_QUIZ;
    AppStore.emitChange();
    break;
    
  default:
    // nothing
  }
  
});


export { AppStore as default };
