import React from 'react';

export default class Input extends React.Component{
  render() {

    var inputStyle = {
      padding: 8,
      margin: 8,
      color: "#333",
      border: "none",
      maxWidth: 500
    };
    var buttonStyle = {
      padding: 8,
      margin: 8,
      background: "none",
      border: "none"
    }

    return (
      <div>
        <form>
          <input style={inputStyle} type="text" placeholder="+  Add Task"></input>
          <button style={buttonStyle}>&#10003;</button>
        </form>
      </div>
    );
  }
}
