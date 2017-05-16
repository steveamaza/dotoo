import React from 'react';
import Main from './Main.jsx';
import Sidebar from './Sidebar.jsx';

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Main />
      </div>
    );
  }
}
