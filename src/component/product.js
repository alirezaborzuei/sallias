import React from "react";
import {Link} from "react-router-dom";
import '../styles/product.css'
class Product extends React.Component{
    render() {
        const { product } = this.props;
        return (

            <div className="product-margin col-lg-4 col-sm-6 col-xs-12" style={{ marginBottom : 20 }}>
                <br/><br/><br/>

                <div className="card ">
                    <img className="card-img-top" src={product.image} alt={product.title} />
                    <div className="card-body">
                        <h4 className="card-title">{product.title}</h4>
                        <p className="card-text">{product.body.substr(0,100)}...</p>
                        <Link className="btn btn-primary" to={`product/${product.id}`}>توضیحات بیشتر</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
