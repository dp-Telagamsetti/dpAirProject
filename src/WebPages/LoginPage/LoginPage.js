import React from 'react';
import Header from '../../Componets/Header/Header';
import Footer from '../../Componets/Footer/Footer';
import Login from '../../Componets/Login/Login';

class Loginpage extends React.Component{
    render(){
        return(
            <div>
                <Header pageTitle = "Login"/>
                <Login/>
                <Footer/>
                
            </div>
        );
    }  
}

export default Loginpage;