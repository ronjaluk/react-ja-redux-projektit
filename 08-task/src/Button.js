import React from 'react';

import './Button.css';

const Button = (props) => {
    return (
        <div style={ { backgroundColor: this.props.active ? this.props.activeColor : this.props.buttonColor }} className={"button" + (this.props.active ? " active" : "") }  onClick={ this.props.clickHandler }>
          { this.props.label }</div>
    );
  }


Button.defaultProps = {
  activeColor: 'white'
}

export default Button;
