import React from 'react';

export default class Items extends React.Component {

  render() {
    var todoEntries = this.props.entries;

    function createTask(item) {
      return <li key={item.key}>{item.text}</li>
    }

    var listItems = todoEntries.map(createTask);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}
