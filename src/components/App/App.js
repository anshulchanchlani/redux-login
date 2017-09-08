import React, { Component } from 'react';
import {connect } from 'react-redux'
// import '../.././styles/App.css';
import Login from '.././Login/Login';
import Home from '.././Home/Home';
import AboutUs from '.././AboutUs/AboutUs';
import Profile from '.././Profile/Profile';
import Team from '.././Team/Team';
import ContactUs from '.././ContactUs/ContactUs';

 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
 
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
class App extends Component {
   
  render() {
    
    return (
      <MuiThemeProvider>
        <BrowserRouter>
            <div>
            <Route exact path = "/" component={Login} />


            <Route exact path = "/home" component={Home} />

             <Route exact path = "/aboutus" component={AboutUs} />
             <Route exact path="/aboutus/profile" component={Profile} />
             <Route exact path="/aboutus/team" component={Team} />
             <Route exact path="/aboutus/contactus" component={ContactUs} />
             </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }


}



 

export default App;
