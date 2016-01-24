import { EventEmitter } from 'events';

import XMQDispatcher from '../dispatcher/xmq-dispatcher.js';
import ActionTypes from '../constants/xmq-action-types.js';
import xws from '../xws/xws.js';
import { isInteger } from '../core/utils.js';


function filterShipsByFactions(allShips, factionList) {
  return allShips.filter((ship) => {
    return factionList.some((f) => {
      return ship.factions.indexOf(f.name) >= 0 && f.selected;
    });
  });
}


const CHANGE_EVENT = 'ships-change';


// Construct ship data
const allShips = (function () {
  xws.setupCardData(xws.basicCardData());
  const baseShips = xws.basicCardData().ships;
  return Object
    .keys(baseShips)
    .map((key) => {
      return baseShips[key];
    })
    .filter((ship) => {
      return ship.huge !== true; // Filter out epic ships
    })
    .filter((ship) => {
      return ship.maneuvers.length > 0; // Filter ships with known maneuvers
    });
})();


let ships = allShips;

let ShipStore = Object.assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getShips: function () {
    return ships;
  }
  
});


ShipStore.dispatchToken = XMQDispatcher.register(function (action) {

  switch (action.type) {

  case ActionTypes.UPDATE_FILTERS:
    console.log(action);
    ships = filterShipsByFactions(allShips, action.data);
    ShipStore.emitChange();
    break;

  default:
    // nothing
  }
  
});


export { ShipStore as default };
