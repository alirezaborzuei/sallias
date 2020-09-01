import React from "react";
import {Link} from "react-router-dom";
import '../styles/product.css'
class Product extends React.Component{
    render() {
        const { product } = this.props;
        return (
            <div className="col-lg-4 col-sm-6 col-xs-12" style={{ marginBottom : 20 }}>
                <br/>
                <Link className="tdn" to={`product/${product.id}`}>
                <div className="card">
                <div class="card-horizontal">
                    <img className="card-img-left post-card-image" src={product.image} alt={product.title} />
                    <div className="card-body post-card-body">
                        <h4 className="card-title post-card-title">{product.title}</h4>
                        {/*<h2>{{product.price}}</h2> */} 
                       <span className="card-text">۳,۴۵۰,۰۰۰ تومان</span>
                       <small class="text-muted ">1 ساعت قبل</small>
                        {/*<p className="card-text">{product.body.substr(0,100)}...</p>*/ }
                    </div>
                </div>
            
                </div>
                </Link>
            </div>
        );
    }
}

export default Product;
