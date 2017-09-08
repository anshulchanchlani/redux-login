import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {authenticateUser} from '../.././actions/User-Login/UserLoginActions'
class Login extends React.Component{
    constructor(props){
        super(props)
        
        this.state={email:null,password:null};
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(e){
        e.preventDefault();
        this.props.authenticateUser(this.state.email,this.state.password);

    }
    render(){
           let{isAuthenticated,authenticationError} = this.props;
           
        return(
            
             isAuthenticated===true ? <Redirect to={'/home'}/>:
            <div>
                <div>
                <h3>Email</h3>
                <input type="text" onChange={e=>this.setState({email:e.target.value})}/>
                </div>
                <div>
                <h3>Password</h3>
                
                <input type="password" onChange={e=>this.setState({password:e.target.value})}/>
                </div>
                <div>
                <button onClick={this.onLoginClick} > Login </button>
                </div>
                {authenticationError!=null?<h6>Invalid credentials. Please try again.</h6>:null}
            </div>
            
        )
    }
    
}

//reducer mapping
function mapStateToProps(state){
    
    return{
        isAuthenticating: state.authenticationReducer.isAuthenticating,
        isAuthenticated: state.authenticationReducer.isAuthenticated,
        authenticationError: state.authenticationReducer.authenticationError
    }
}


//action mapping
function mapDispatchToProps(dispatch){
    return{
        authenticateUser: (email,password) => dispatch(authenticateUser(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);