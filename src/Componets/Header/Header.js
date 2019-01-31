import React, {Component} from 'react';
import './Header.css';
import { Redirect } from 'react-router-dom';


class Header extends Component{
    constructor(prop){
        super();
        this.state = {
            Logoutredirect: false,
            Cartredirect: false
        }
        this.onLogoutRedirect = this.onLogoutRedirect.bind(this)
        this.onCartRedirect = this.onCartRedirect.bind(this)
    }
    
    onLogoutRedirect(){
        this.setState({
            Logoutredirect: !this.state.Logoutredirect
        });
    }

    onCartRedirect(){
        this.setState({
            Cartredirect: !this.state.Cartredirect
        });
    }


    renderRedirect(){
    if(this.state.Logoutredirect){
        return <Redirect to='/'/> 
    }
    if(this.state.Cartredirect){
        return <Redirect to='/Cart'/> 
    }
}

    render(){
        
        return(
            
            <div className="App-header"> 
                {this.renderRedirect()}            
            <div className="Header-text">{this.props.pageTitle}
            <button className="Logout" onClick={this.onLogoutRedirect}>{this.props.Logouttitle}</button> 
            <button className="button_cart" onClick={this.onCartRedirect}>{this.props.Carttitle}</button>
            </div>               
            </div> 
            //pageTitle props accessed from webpages (Homepage, loginpage)
              
        );
    }
}
export default Header;