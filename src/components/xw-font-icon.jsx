import React from 'react';
import classNames from 'classnames';


let XWFontIcon = React.createClass({

  displayName: "XWFontIcon",

  propTypes: {
    iconName: React.PropTypes.string.isRequired
  },
  
  render: function () {

    let iconClass = classNames(
      'xwing-miniatures-font',
      'xwing-miniatures-font-' + this.props.iconName
    );
    
    return (
      <i className={iconClass} />
    );
  }

});


export { XWFontIcon as default };
