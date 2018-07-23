import React, { PureComponent } from 'react';

class ErrorMessage extends PureComponent {
  render() {
    const {message} = this.props
    if (!message) {
      return null
    }
    return (
      <span
        style={{
          color: 'red',
          display: 'block',
          marginTop: '5px',
          fontSize: '1rem'
        }}
      >{message}</span>
    )
 }
}

export default ErrorMessage;
