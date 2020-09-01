import React from "react";
import {Link} from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import FilterListIcon from '@material-ui/icons/FilterList';
import "../styles/catergorymin.css"
class Catergorymin extends React.Component {

    render() {
        return (
            <div className=" action-bar col-sm-12 col-xs-12 col-lg-10 mrc">
                <ul >
                    <li className="d-lg-none d-md-none lis">
                        <Link to=" ">
                            <ListIcon className="iconsize" style={{fontSize: 25}}/>
                            <tittle className="text-dark "> دسته بندی</tittle>
                        </Link>
                    </li>
                    <li className="d-lg-none d-md-none lis">
                        <Link to=" ">
                            <FilterListIcon className="iconsize" style={{fontSize: 25}}/>
                            <tittle className="text-dark "> فیلترها</tittle>
                        </Link>
                    </li>
                    
                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark "> خودرو سواری</tittle>
                        </Link>
                    </li>
                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark "> فروش آپارتمان</tittle>
                        </Link>
                    </li>
                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark ">اجاره آپارتمان</tittle>
                        </Link>
                    </li>
                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark ">موبایل</tittle>
                        </Link>
                    </li>
                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark ">مبلمان</tittle>
                        </Link>
                    </li>
                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark "> حیوانات</tittle>
                        </Link>
                    </li>

                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark ">وسایل شخصی</tittle>
                        </Link>
                    </li>

                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark "> خدمات</tittle>
                        </Link>
                    </li>

                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark ">استخدام</tittle>
                        </Link>
                    </li>

                    <li className="lis">
                        <Link to=" ">

                            <tittle className="text-dark ">تلویزیون</tittle>
                        </Link>
                    </li>
                </ul>
                </div>
        );
    }


}

export default Catergorymin;