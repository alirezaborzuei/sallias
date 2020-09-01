import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/adds.css'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        }
    }
    componentDidMount() {
        const { params } = this.props.match;
        axios.get(`http://roocket.org/api/products/${params.id}`)
            .then(response => {
                this.setState({
                    article: response.data.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        const { article } = this.state;
        return (
            <div className=" col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <br /><br /><br /><br />
                <img className=" post-page__image" src={article.image} alt={article.title} />
                <h2 className="text-right">{article.title} </h2>
                <div>
                <br /><br /><br /><br /><br /><br /><br />
                    <button >دریافت اطلاعات تماس</button>
                    <button >شروع چت</button>
                    <button >کردن نشان</button>
                    <div className="post-fields-item">
                        <span className="post-fields-item__title">دسته‌بندی</span>
                        {/*<div className="post-fields-item__value">{article.category}</div> */}
                        <div className="post-fields-item__value">یخچال و فریزر</div>
                    </div>
                    <div className="post-fields-item">
                        <span className="post-fields-item__title">محل</span>
                        <a className="post-fields-item__value" href="/s/tehran/refrigerator-freezer/aminhozour">تهران، امین حضور</a>
                        {/*<div className="post-fields-item__value"><Link to='/city/id'>{article.city}</Link></div> */}
                    </div>
                    <div className="post-fields-item">
                        <span className="post-fields-item__title">نوع آگهی</span>
                        {/*<div className="post-fields-item__value">{article.categoryadds}</div> */}
                        <div className="post-fields-item__value">فروشی</div>
                    </div>
                    <div className="post-fields-item">
                        <span className="post-fields-item__title">برند</span>
                        {/*<div className="post-fields-item__value">{article.brand}</div> */}
                        <div className="post-fields-item__value">ایستکول</div>
                    </div><div className="post-fields-item">
                        <span className="post-fields-item__title">وضعیت</span>
                        {/*<div className="post-fields-item__value">{article.category}</div> */}
                        <div className="post-fields-item__value">نو</div>
                    </div><div className="post-fields-item">
                        <span className="post-fields-item__title">شناسهٔ کالا</span>
                        {/*<div className="post-fields-item__value">{article.status}</div> */}
                        <div className="post-fields-item__value">۲۹۰۱۳۳۴۷۰۰۰۵۶</div>
                    </div><div className="post-fields-item">
                        <span className="post-fields-item__title">قیمت</span>
                        {/*<div className="post-fields-item__value">{article.kindprice}</div> */}
                        <div className="post-fields-item__value">توافقی</div>
                    </div>
                </div>
                <div className=" text-right post-fields-item__title">
                    <span >توضیحات</span>
                    <div className=" text-right post-fields-item__value">
                        <span >{article.body}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;