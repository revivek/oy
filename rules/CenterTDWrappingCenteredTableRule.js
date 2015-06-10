import React from 'react';


export default {
  name: 'CenterTDWrappingCenteredTableRule',
  description: '',

  validate: function(props) {
    if (props.children) {
      React.Children.map(props.children, function(child) {
        console.log(child);
      });
    }

    return;
  },

  autocorrect: function(props) {
    return props;
  }
};

