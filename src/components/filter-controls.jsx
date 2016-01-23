import React from 'react';


const FilterControls = React.createClass({

  propTypes: {
    items: React.PropTypes.array.isRequired,
    handleOnChange: React.PropTypes.func
  },
  
  render: function() {

    let checkBoxes = this.props.items.map((item) => {
      return (
        <label key={item.name}>
          <input
              type="checkbox"
              checked={item.selected}
              onChange={this.props.handleOnChange(item.name)}
          />
          {item.name}
        </label>
      );
    }, this);
    
    return (
      <div className="filters">
        <div className="inner">
          {checkBoxes}
        </div>
      </div>
    );
  }
  
});


export { FilterControls as default };
