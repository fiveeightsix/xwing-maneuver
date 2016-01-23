import React from 'react';

import {
  hasManeuver,
  hasManeuverType,
  getManeuverColour,
  isAnsweredCorrectly
} from '../core/question.js';
import { COLUMN_TO_ICON, MANEUVER_TO_COLOUR } from '../constants/maps.js';
import ManeuverTable from './maneuver-table.jsx';
import XWFontIcon from './xw-font-icon.jsx';


const Answer = React.createClass({

  displayName: "Answer",

  propTypes: {
    question: React.PropTypes.shape({
      ship: React.PropTypes.object,
      maneuver: React.PropTypes.object,
      answer: React.PropTypes.bool
    }).isRequired
  },
  
  render: function () {

    let { ship, maneuver } = this.props.question;
    let mark = isAnsweredCorrectly(this.props.question) ? "Correct!" : "Incorrect!";
    let response = null;
    let highlight = hasManeuver(ship, maneuver) || hasManeuverType(ship, maneuver) ?
                    [maneuver.speed, maneuver.type] :
                    undefined;

    if (!hasManeuver(ship, maneuver)) {
      
      if (hasManeuverType(ship, maneuver)) {
        let colour = MANEUVER_TO_COLOUR[getManeuverColour(ship, maneuver)];
        let speedClass = 'speed speed-' + colour;
        response = (
          <span>
            {"The "}{ship.name}{" has a "}
            <span className={speedClass}>{colour} </span>
            {maneuver.speed}
            <XWFontIcon iconName={COLUMN_TO_ICON[maneuver.type]} />
            {"."}
          </span>
        );      
      }
      else {
        response = (
          <span>
            {"The "}
            {ship.name}
            {" does not have a "}
            {maneuver.speed}
            <XWFontIcon iconName={COLUMN_TO_ICON[maneuver.type]} />
            {" of any colour."}
          </span>
        );
      }
      
    }
    
    return (
      <div className="answer">
        <p>
          <span>{mark} </span>
          {response}
        </p>
        <ManeuverTable
            ship={ship}
            highlight={highlight}
        />
      </div>
    );
  }
  
});


export { Answer as default };
