import React from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../.././actions/User-Login/UserLoginActions'
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={email:null,
            password:null,
            isAuthenticating: this.props.isAuthenticating,
            isAuthenticated: this.props.isAuthenticated,
            isAuthenticationError: this.props.isAuthenticationError
        }
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(e){
        e.preventDefault();
        console.log("email",this.state.email);
        console.log("pass",this.state.password);
        this.props.authenticateUser(this.state.email,this.state.password);

    }
    render(){
        return(
            <div>
                <h3>Email</h3>
                <input type="text" onChange={e=>this.setState({email:e.target.value})}/>
                <h3>Password</h3>
                <input type="password" onChange={e=>this.setState({password:e.target.value})}/>
                <button onClick={this.onLoginClick} > Login </button>
            </div>
        )
    }
    
}

//reducer mapping
const mapStateToProps =(state) =>{
    return{
        isAuthenticating: state.isAuthenticating,
        isAuthenticated: state.isAuthenticated,
        isAuthenticationError: state.isAuthenticationError
    }
}


//action mapping
const mapDispatchToProps =(dispatch) =>{
    return{
        authenticateUser: (email,password) => dispatch(authenticateUser(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);