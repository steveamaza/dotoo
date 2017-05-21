import React from 'react';
import TextField from 'material-ui/TextField';

export default class Input extends React.Component{
  render() {

    var inputStyle = {
      paddingTop: 4,
      paddingBottom: 4,
      paddingRight: 16,
      paddingLeft: 16,
      margin: 8,
      color: "#333",
      border: "none",
      width: "70%"
    };
    var hintStyle = {
      color: "#ccc"
    };
    var buttonStyle = {
      padding: 8,
      margin: 8,
      background: "none",
      border: "none"
    }

    return (
      <div>
        <form onSubmit={this.addItem}>
          <TextField id="task_item" underlineShow={false} ref={(a) => this._inputElement = a} style={inputStyle} hintStyle={hintStyle} type="text" hintText="+  Add Task"></TextField>
          <button style={buttonStyle}>&#10003;</button>
        </form>
      </div>
    );
  }
}
