import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {cities} from '../data/cities';
import "../styles/Dashboard.css";
import "../styles/category.css"
import '@material-ui/icons'
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ApartmentIcon from '@material-ui/icons/Apartment';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WeekendIcon from '@material-ui/icons/Weekend';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import CasinoIcon from '@material-ui/icons/Casino';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    menubtn: {
        textDecoration: 'none',
    },
}));


const Catergory = () => {
    const classes = useStyles();
    const [filterText, setFilterText] = useState("");

    const filteredItems = cities.filter(item =>
        item.name.includes(filterText)
    );
    const itemsToDisplay = filterText ? filteredItems : cities;
    return (
        
            <div className="welcome textStyle">
                <br/><br/><br/>
               
                <div className="text-right text-link">
                   <ul >
                   <li><span>دسته بندی ها</span></li> 
                    <li>
                    <Link   to=" "> <ApartmentIcon className="iconsize " style={{fontSize: 30}}/>
                        <tittle className="text-dark "> املاک</tittle>
                    </Link></li>
                    
                     <li>
                    <Link to=" "> <DirectionsCarIcon className="iconsize " style={{fontSize: 30}}/>
                        <tittle className="text-dark"> وسایل نقلیه</tittle>
                    </Link></li>
                    
                    <li>
                     <Link to=" "> <PhoneIphoneIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> لوازم الکترونیکی</tittle>
                     </Link></li>
                     
                     <li>
                     <Link to=" "> <WeekendIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> مربوط به خانه</tittle>
                     </Link></li>
                   
                     <li>
                     <Link to=" "> <FormatColorFillIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> خدمات</tittle>
                     </Link></li>
                  
                     <li>
                     <Link to=" "> <DirectionsBikeIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> وسایل شخصی</tittle>
                     </Link></li>
                     
                        <li>
                      <Link to=" "> <CasinoIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> سرگرمی و فراغت</tittle>
                     </Link> 
                     </li>
                     
                     <li>
                     <Link to=" "> <GroupAddIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> اجتماعی</tittle>
                     </Link></li>
                     
                     <Link to=" "> <BusinessCenterIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> برای کسب و کار</tittle>
                     </Link>
                     
                     <li>
                     <Link to=" "> <PersonAddIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> استخدام و کاریابی</tittle>
                     </Link></li>
                   
                     <li>
                     <Link to=" "> <LocalPrintshopIcon className="iconsize " style={{fontSize: 30}}/>
                         <tittle className="text-dark"> انجام پروژه</tittle>
                     </Link>
                     </li>
                     </ul>
                     <hr className="hr"/>
                </div>
                <div>
                    <Link to=" "><img alt="3" src="/assert/3.png" className="logo"/></Link>
                    <Link to=" "><img alt="2" src="/assert/2.png" className="logo"/></Link>
                    <Link to=" "><img alt="1" src="/assert/1.png" className="logo"/></Link>
                </div>
                <hr className="hr"/>
                <div>
                    <span className="bold">  سالیاس </span>
                    <span>را در شبکه های اجتماعی دنبال نمائید:</span>
                </div>
                <div>
                    <Link to="/te"><TelegramIcon className="iconsize " style={{fontSize: 40}}/></Link>
                    <Link to="/tw"><TwitterIcon className="iconsize " style={{fontSize: 40}}/></Link>
                    <Link to="/i"><InstagramIcon className="iconsize " style={{fontSize: 40}}/></Link>
                </div>
            </div>


       
    );
}
export default Catergory;