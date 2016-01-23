import React from 'react';

import { COLUMN_TO_ICON, MANEUVER_TO_COLOUR } from '../constants/maps.js';
import XWFontIcon from './xw-font-icon.jsx';


/* function emptyColumns(maneuverData) {
   let cols = maneuverData[0].map(() => { return true; });

   maneuverData.forEach((row) => {
   row.forEach((item, i) => {
   if (item !== 0) {
   cols[i] = false;
   }
   });
   });

   return cols;  
   }


   function emptyRows(maneuverData) {
   return maneuverData.map((row) => {
   return row.every((item) => { return item === 0; });
   });
   }
 */

const ManeuverTableRow = React.createClass({

  displayName: "ManeuverTableRow",
  
  propTypes: {
    speed: React.PropTypes.number.isRequired,
    maneuvers: React.PropTypes.array.isRequired,
    highlight: React.PropTypes.number
  },

  getDefaultProps: function () {
    return { highlight: -1 }
  },

  render: function () {

    let cells = this.props.maneuvers.map((maneuver, i) => {
      let icon = (this.props.speed === 0) ? 'stop' : COLUMN_TO_ICON[i];
      let colourClass = 'maneuver-' + MANEUVER_TO_COLOUR[maneuver];
      return (
        <td key={i}
            className={(i === this.props.highlight) ? 'highlight' : null }>
          <span className={colourClass}>
            <XWFontIcon iconName={icon} />
          </span>
        </td>
      );
    }, this);
    
    return (
      <tr>
        <th scope="row">
          {this.props.speed}
        </th>
        {cells}
      </tr>
    );
  }
});


const ManeuverTable = React.createClass({

  displayName: "ManeuverTable",
  
  propTypes: {
    ship: React.PropTypes.object.isRequired,
    highlight: React.PropTypes.array
  },

  getDefaultProps: function () {
    return { highlight: [null, null]};
  },
  
  render: function() {

    let [hlSpeed, hlManeuver] = this.props.highlight;
    let width = this.props.ship.maneuvers[0].length;
    let rows = this.props.ship.maneuvers.map((maneuvers, speed) => {
      let highlight = (speed === hlSpeed) ? hlManeuver : null;
      return (
        <ManeuverTableRow
            key={speed}
            speed={speed}
            maneuvers={maneuvers}
            highlight={highlight}
        />
      );
    }).reverse();

    return (
      <table className={'maneuver-table'}>
        <thead>
          <tr>
            <th colSpan={width + 1}>
              {this.props.ship.name}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }
  
});


export { ManeuverTable as default };
