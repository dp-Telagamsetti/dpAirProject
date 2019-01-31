import React, {Component} from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';





class Login extends Component{
    constructor(prop){
        super();
        this.state = {
            redirect: false, userid:"", passcode:""
        }
        this.onRedirect = this.onRedirect.bind(this)
        this.userChange = this.userChange.bind(this)
        this.passcodeChange = this.passcodeChange.bind(this)
    }
    
    onRedirect(){
        
              
        if(this.state.userid === "durgaprasad" & this.state.passcode === "react"){
        this.setState({
            redirect: !this.state.redirect
        });
        }else{
        alert(
            "Check username and password"
        );
    }
    }

    
    userChange(event){
        this.setState({
            userid: event.target.value
        });
    }

    passcodeChange(event){
        this.setState({
            passcode: event.target.value
        });
    }

    renderRedirect(){
    if(this.state.redirect){
        return <Redirect to='/Home'/>
    }     
           
}

    render(){           
            
        return(
            <div>
            {this.renderRedirect()}
            <h1 className="Login-title">Login</h1>
            <input className="Usernametb" type="text" placeholder="Unsername" value={this.state.userid} onChange={this.userChange}></input>            
            <input className="Passwordtb" type="password" placeholder="Password" value={this.state.passcode} onChange={this.passcodeChange}></input>
            <button className="button-login" onClick={this.onRedirect}>Login</button>           
            
          </div>    
        );
    }
}
export default Login;