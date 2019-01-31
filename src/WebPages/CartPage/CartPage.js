import React, {Component} from 'react';
import Header from '../../Componets/Header/Header';
import Footer from '../../Componets/Footer/Footer';
import {connect} from 'react-redux';
import './CartPage.css';
import { Redirect } from 'react-router-dom';


class Cart extends Component{
    constructor(prop){
        super();
        this.state = {
            Homeredirect: false                   }
        this.onHomeRedirect = this.onHomeRedirect.bind(this)
        
    }
    
    onHomeRedirect(){
        this.setState({
            Homeredirect: !this.state.Homeredirect
        });
    }

    
    renderRedirect(){
    if(this.state.Homeredirect){
        return <Redirect to='/Home'/> 
    }    
}


    render(){
        
        return(
            
            <div> 
                <Header pageTitle = "Cart" Logouttitle = "Logout"/>
                <div className="Container">
                        <div className="Cart_one">
                            <div className="Cart_img">
                                 <img src={this.props.image} alt="imag not available"/>                                 
                            </div>                        
                        </div>

                        <div className="Cartproduct_details">
                        HP - 330-15IKBR 15.6" Laptop - Intel Core i3 - 8GB Memory - 1TB Hard Drive - Onyx 
                        </div>

                        <div className="Cartproduct_quantity"><h4 >Quantity</h4>
                        <h2>{this.props.Datafromred}</h2>
                        </div>

                        <div className="remove_product">
                        <button>Remove Product</button>
                        <div className="backtohome">
                        <button onClick={this.onHomeRedirect}>Back to Home</button>
                        {this.renderRedirect()}  
                        </div>
                        
                        </div>                       
                       
                            
                </div>
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

const mapDispachToProps = (dispatch) => {
    return{
        OnItemUp: () => {dispatch({type:'Item_add'})}
        
    }
};

export default connect(mapStateToProps, mapDispachToProps)(Cart);
