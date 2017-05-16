import React from 'react';
import Container from './Container.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Container />
      </MuiThemeProvider>
    );
  }
}
