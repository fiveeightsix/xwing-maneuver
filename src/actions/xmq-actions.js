import XMQDispatcher from '../dispatcher/xmq-dispatcher.js';
import ActionTypes from '../constants/xmq-action-types.js';


function updateFilters (filtersObj) {
  XMQDispatcher.dispatch({
    type: ActionTypes.UPDATE_FILTERS,
    data: filtersObj
  });
}


function startRound(firstQuestion) {
  XMQDispatcher.dispatch({
    type: ActionTypes.START_ROUND,
    data: firstQuestion
  });
}


function poseQuestion(question) {
  XMQDispatcher.dispatch({
    type: ActionTypes.POSE_QUESTION,
    data: question
  });
}


function answerQuestion(question, answer) {
  XMQDispatcher.dispatch({
    type: ActionTypes.ANSWER_QUESTION,
    data: answer
  });
}


function endRound() {
  XMQDispatcher.dispatch({
    type: ActionTypes.END_ROUND
  });
}


function restartRound() {
  XMQDispatcher.dispatch({
    type: ActionTypes.RESTART_ROUND
  });
}


export {
  updateFilters,
  startRound,
  endRound,
  poseQuestion,
  answerQuestion,
  restartRound
};
