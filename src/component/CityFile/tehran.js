import React, { Component } from 'react';
import axios from 'axios';
import Product from './../product'
import InfiniteScroll from 'react-infinite-scroller';
import Catergory from "../category";

class  Tehran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : [],
            nextPage : 1,
            hasMore : true
        }
    }

    handleLoadMore() {
        axios.get(`http://roocket.org/api/products?page=${this.state.nextPage}`)
            .then(response => {
                const {current_page , last_page , data} = response.data.data;
                console.log(data);
                this.setState(prevState => ({
                    articles: [ ...prevState.articles , ...data],
                    hasMore: current_page !== last_page,
                    nextPage : current_page + 1
                }))
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div >
                < Catergory />
                <InfiniteScroll
                    className="row rtl "
                    pageStart={0}
                    loadMore={this.handleLoadMore.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader"> درحال بارگذاری...</div>}
                >
                 {this.state.articles.map((product , index) => <Product product={product} key={index}/>)}
                </InfiniteScroll>


            </div>
        );
    }
}

export default Tehran;
