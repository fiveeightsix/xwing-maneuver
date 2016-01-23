import React from 'react';

import FilterControls from './filter-controls.jsx';


var StartScreen = React.createClass({
  
  propTypes: {
    settings: React.PropTypes.object.isRequired,
    handleFilterOnChange: React.PropTypes.func.isRequired,
    handleStartOnClick: React.PropTypes.func.isRequired
  },

  render: function () {

    return (
      <div className="start-screen">
        <p>
          {"It's a quiz. On what maneuvers ships in X-Wing can do. X-Wing is a "}
          <a href="https://www.fantasyflightgames.com/en/products/x-wing/">{"game"}</a>{"."}
        </p>
        <p>
          {this.props.settings.questionsPerRound}
          {" questions per round. Select what factions you want to include and press 'Start'."}
        </p>
        <FilterControls
            items={this.props.settings.filters}
            handleOnChange={this.props.handleFilterOnChange}
        />
        <button onClick={this.props.handleStartOnClick}>
          Start quiz
        </button>
      </div>
    );
    
  }

});


export { StartScreen as default };
