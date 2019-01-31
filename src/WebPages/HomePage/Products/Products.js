import React from 'react';
import './products.css';
import { connect } from 'react-redux';

class Products extends React.Component{
 constructor(props){
     super();
 }
 
    render(){
        
        return(                
                <div className="products_one">                
                    <div className="products_img">
                        <img src={this.props.image} alt="imag not available"/>                        
                    </div>
                    <div>
                        <h4 className="products_text">{this.props.productname}</h4>
                    </div>
                    <div>                       
                       <button className="products_addtocart" onClick={this.props.OnItemUp}>ADD TO CART</button>
                    </div>   
                    
                              
                    
            </div>            
           
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        Item: state.posts
    }
};

const mapDispachToProps = (dispatch) => {
    return{
        OnItemUp: () => {dispatch({type:'Item_add'})}
        
    }
};

export default connect(mapStateToProps, mapDispachToProps)(Products);