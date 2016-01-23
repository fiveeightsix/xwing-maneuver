import { randomIntInclusive, chooseFrom, isInteger } from './utils.js';
import {
  TURN_LEFT,  BANK_LEFT, STRAIGHT,
  BANK_RIGHT, TURN_RIGHT, K_TURN,
  S_LOOP_LEFT, S_LOOP_RIGHT,
  T_ROLL_LEFT, T_ROLL_RIGHT,
  WHITE, GREEN, RED
} from '../constants/maneuvers.js';


const possibleManeuvers = [
  {type: TURN_LEFT, speed: 1, colour: [1, 2, 3]},
  {type: TURN_LEFT, speed: 2, colour: [1, 2, 3]},
  {type: TURN_LEFT, speed: 3, colour: [1, 2, 3]},
  {type: BANK_LEFT, speed: 1, colour: [1, 2, 3]},
  {type: BANK_LEFT, speed: 2, colour: [1, 2, 3]},
  {type: BANK_LEFT, speed: 3, colour: [1, 2, 3]},
  {type: STRAIGHT, speed: 0, colour: [3]}, // stop
  {type: STRAIGHT, speed: 1, colour: [1, 2, 3]},
  {type: STRAIGHT, speed: 2, colour: [1, 2, 3]},
  {type: STRAIGHT, speed: 3, colour: [1, 2, 3]},
  {type: STRAIGHT, speed: 4, colour: [1, 2, 3]},
  {type: STRAIGHT, speed: 5, colour: [1, 2, 3]},
  {type: TURN_RIGHT, speed: 1, colour: [1, 2, 3]},
  {type: TURN_RIGHT, speed: 2, colour: [1, 2, 3]},
  {type: TURN_RIGHT, speed: 3, colour: [1, 2, 3]},
  {type: BANK_RIGHT, speed: 1, colour: [1, 2, 3]},
  {type: BANK_RIGHT, speed: 2, colour: [1, 2, 3]},
  {type: BANK_RIGHT, speed: 3, colour: [1, 2, 3]},
  {type: K_TURN, speed: 2, colour: [1, 3]},
  {type: K_TURN, speed: 3, colour: [1, 3]},
  {type: K_TURN, speed: 4, colour: [1, 3]},
  {type: K_TURN, speed: 5, colour: [1, 3]},
  {type: S_LOOP_LEFT, speed: 2, colour: [1, 3]},
  {type: S_LOOP_LEFT, speed: 3, colour: [1, 3]},
  {type: S_LOOP_RIGHT, speed: 2, colour: [1, 3]},
  {type: S_LOOP_RIGHT, speed: 3, colour: [1, 3]},
  {type: T_ROLL_LEFT, speed: 2, colour: [1, 3]},
  {type: T_ROLL_LEFT, speed: 3, colour: [1, 3]},
  {type: T_ROLL_RIGHT, speed: 2, colour: [1, 3]},
  {type: T_ROLL_RIGHT, speed: 3, colour: [1, 3]}
].map((maneuver) => {
  return maneuver.colour.map((colour) => {
    return Object.assign({}, maneuver, {colour: colour});
  });
}).reduce((a, b) => { return a.concat(b); }, []);


function chooseShip(shipList) {
  if (shipList.length <= 1) {
    return shipList[0];
  }
  else {
    return chooseFrom(shipList);
  }
}


function constructQuestion(availableShips) {
  return {
    ship: chooseShip(availableShips),
    maneuver: Object.assign({}, chooseFrom(possibleManeuvers))
  };
}


function hasManeuverOfSpeed(ship, speed) {
  return ship.maneuvers[speed] !== undefined;
}


function hasManeuverType(ship, maneuver) {
  if (!hasManeuverOfSpeed(ship, maneuver.speed)) {
    return false;
  }
  else {
    let s = ship.maneuvers[maneuver.speed];
    return isInteger(s[maneuver.type]) && s[maneuver.type] > 0;
  }  
}


function hasManeuver(ship, maneuver) {
  if (!hasManeuverOfSpeed(ship, maneuver.speed)) {
    return false;
  }
  else {
    let s = ship.maneuvers[maneuver.speed];
    return s[maneuver.type] === maneuver.colour;
  }  
}


function getManeuverColour(ship, maneuver) {
  return ship.maneuvers[maneuver.speed][maneuver.type];
}


function isAnswered(question) {
  return question.hasOwnProperty('answer') && typeof question.answer === 'boolean';
}


function isAnsweredCorrectly(question) {
  return hasManeuver(question.ship, question.maneuver) === question.answer;
}


function getLastQuestion(questionHistory) {
  return questionHistory[questionHistory.length - 1];
}


export {
  chooseShip,
  constructQuestion,
  hasManeuverOfSpeed,
  hasManeuverType,
  hasManeuver,
  getManeuverColour,
  isAnswered,
  isAnsweredCorrectly,
  getLastQuestion
};
