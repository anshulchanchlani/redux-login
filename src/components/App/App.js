import React, { Component } from 'react';
 
// import '../.././styles/App.css';
import Login from '.././Login/Login';
 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
 
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
            <div>
            <Route exact path = "/" component={Login}/>
            
            </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
