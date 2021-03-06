import React from 'react';
import {Link} from 'react-router-dom';
import OptionSelect from './inputcity';
import {Tehrancites} from '../data/Tehrancitys';
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
import "../styles/collapse.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from '@material-ui/core/Collapse';
import RangeSlider from "./raneprice";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
class Catergory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pricestate: false,
            location: false,
            checkedA: false,
            checkedB:false,
        }
    }

    togglechane(event) {
        this.setState(prevState => ({
            checkedA: !prevState.checkedA,

        }))
    };
    togglechaneB(event) {
        this.setState(prevState => ({
            checkedB: !prevState.checkedB,
        }))
    };
    handleprice() {
        this.setState(prevState => ({
            pricestate: !prevState.pricestate
        }))
    };

    handleClick() {
        this.setState(prevState => ({
            location: !prevState.location
        }))
    };


    render() {
        return (
            <div className="mr-4 text-nowrap menu-style text-right d-none d-lg-block ">
                <div className="">
                    <ul>
                        <li><span>دسته بندی ها</span></li>
                        <li>
                            <Link to=" "> <ApartmentIcon className="iconsize " style={{fontSize: 30}}/>
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
                        <li>
                        <Link to=" "> <BusinessCenterIcon className="iconsize " style={{fontSize: 30}}/>
                            <tittle className="text-dark"> برای کسب و کار</tittle>
                        </Link>
                        </li>
                        <li>
                            <Link to=" "> <PersonAddIcon className="iconsize " style={{fontSize: 30}}/>
                                <tittle className="text-dark"> استخدام و کاریابی</tittle>
                            </Link></li>
                        <li>
                            <Link to=" "> <LocalPrintshopIcon className="iconsize" style={{fontSize: 30}}/>
                                <tittle className="text-dark"> انجام پروژه</tittle>
                            </Link>
                        </li>
                        <li>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >

                                <ListItem button onClick={this.handleClick.bind(this)}>
                                    <ListItemText primary="محل"/>
                                    {this.state.location ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={this.state.location} timeout="auto" unmountOnExit>
                                    <List component="div">
                                        <ListItem button>
                                            <OptionSelect data={Tehrancites} minlenght={1}/>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className=" "
                            >
                                <ListItem button onClick={this.handleprice.bind(this)}>
                                    <ListItemText primary="قیمت"/>
                                    {this.state.pricestate ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={this.state.pricestate} timeout="auto" unmountOnExit>
                                    <List component="div">
                                        <ListItem button className=" ">
                                            <RangeSlider />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>


                        </li>
                        <li>
                            <Link>
                                <div>
                                <span  className="text-dark mr-4"> فقط عکس دار</span>
                                    <FormControlLabel
                                        control={
                                            <Switch className="mr-5"
                                                checked={this.state.checkedA}
                                                onChange={(e)=>this.togglechane(e)}
                                                name="checkedA"
                                                color="primary"
                                            />
                                        }
                                    />
                                </div>
                            </Link>
                        </li>
                    <li>
                        <div>
                            <span  className="text-dark mr-4"> فقط فوری</span>
                            <FormControlLabel
                                control={
                                    <Switch className="css-mr"
                                            checked={this.state.checkedB}
                                            onChange={(e)=>this.togglechaneB(e)}
                                            name="checkedB"
                                            color="primary"
                                    />
                                }
                            />
                        </div>
                    </li>

                    </ul>

                </div>

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

    toggle = index => {
        let collapse = "isOpen" + index;

        this.setState(prevState => ({[collapse]: !prevState[collapse]}));
    };
}

export default Catergory;