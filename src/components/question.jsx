import React from 'react';

import { COLUMN_TO_ICON, MANEUVER_TO_COLOUR } from '../constants/maps.js';
import * as utils from '../core/utils.js';

import XWFontIcon from './xw-font-icon.jsx';


let Question = React.createClass({

  displayName: "Question",

  propTypes: {
    question: React.PropTypes.shape({
      ship: React.PropTypes.object,
      maneuver: React.PropTypes.object,
    }).isRequired
  },
  
  render: function () {
    
    let { ship, maneuver } = this.props.question;
    maneuver.type = 2;
    let colour = MANEUVER_TO_COLOUR[maneuver.colour];
    let speedClass = 'speed speed-' + colour;
    let article = utils.startsWithVowel(ship.name) ? 'an' : 'a';
    
    return (
      <div className="question">
        <p>
          {"Does "} {article} {ship.name} {" have a "}<span className={speedClass}>{colour}</span> {maneuver.speed}
          <XWFontIcon iconName={COLUMN_TO_ICON[maneuver.type]} />?
        </p>
      </div>
    );

  }
  
});


export { Question as default };
