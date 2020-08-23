import React, { Component } from 'react';
import axios from 'axios';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article : {}
        }
    }
    componentDidMount() {
        const { params } = this.props.match;
        axios.get(`http://roocket.org/api/products/${params.id}`)
            .then(response => {
                this.setState({
                    article : response.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const { article } = this.state;
        return (
            <div className="rtl">
                <h2>عنوان محصول : {article.title} </h2>
                <p>{article.body}</p>
            </div>
        );
    }
}

export default Product;