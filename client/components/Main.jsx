import React from 'react';
import Paper from 'material-ui/Paper';
import Input from './Input.jsx';
import Items from './Items.jsx';

export default class Main extends React.Component {
  constructor(props, content) {
    super(props, content);

    this.state = {
      items: []
    };
  };

  addItem(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
    );

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Paper>
          <Input />
        </Paper>
        <Items entries={this.state.items}/>
      </div>
    )
  }
}
