import React from 'react';
import Header from '../../Componets/Header/Header';
import Footer from '../../Componets/Footer/Footer';
//import LoginData from '../../JsonData/LoginJsonData.json';
import Products from '../HomePage/Products/Products';
import images from '../../ImageData/Lp5.jpg';
import './HomePage.css';
import {connect} from 'react-redux';

class Homepage extends React.Component{
    constructor(props){
        super();
    }
    
    
    render(){    
          
        return(
            <div>                
                <Header pageTitle = "Home" Logouttitle = "Logout" Carttitle={"Cart ( "+this.props.Datafromred+" )"}/>
                
                <Products image = {images} productname="HP Laptop"/>  

                <Footer/>     
                
            </div>
        );
    }
}

const mapStateToProps=(state) =>
{
    return{
        Datafromred: state.posts 
    }
}


export default connect(mapStateToProps)(Homepage);





//{LoginData.map((JsonDataDetails, index)=>{
   // return {
     //   value: JsonDataDetails.userName