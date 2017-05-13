import React from 'react';

export default class Input extends React.Component{
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Write here"></input>
          <button>OK</button>
        </form>
      </div>
    );
  }
}
