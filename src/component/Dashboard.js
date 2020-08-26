import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {cities} from '../data/cities';
import "../styles/Dashboard.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';

const Dashboard = () => {
    const [filterText, setFilterText] = useState("");

    const filteredItems = cities.filter(item =>
        item.name.includes(filterText)
    );
    const itemsToDisplay = filterText ? filteredItems : cities;
    return (
        <div className="welcome">
            <div className="textStyle">

<p>
                <span> سالیاس! پایگاه خرید و فروش بی‌واسطه‌</span>
                <br/>
                <span>   اگه دنبال چیزی هستی، شهرت رو انتخاب کن و تو دسته‌بندی‌ها به دنبالش بگرد.</span>

                <br/>
                <span> اگر هم می‌خوای چیزی بفروشی، چند تا عکس خوب ازش بگیر و آگهیت رو بچسبون به سالیاس .</span>

</p>
                <hr className="hr"/>
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
                <div className="">
                    <Link to="/te"><TelegramIcon className="iconsize " style={{ fontSize: 20 }}/></Link>
                    <Link to="/tw"><TwitterIcon className="iconsize " style={{ fontSize: 20 }}/></Link>
                    <Link to="/i"><InstagramIcon className="iconsize " style={{ fontSize: 20 }}/></Link>
                </div>
            </div>

            <Paper component="form" className={"icon-root position-input"}>
                <InputBase
                    className="search-input"
                    placeholder="جستجوی شهر"
                    value={filterText}
                    onChange={e => setFilterText(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}/>
                <IconButton className="iconButton">
                    <SearchIcon/>
                </IconButton>
            </Paper>
            <br/>
            <h2 className="pos-h2">لیست شهر ها</h2>
            <div className="position-city">
                {!filteredItems.length && (
                    <div>شهر مورد نظر یافت نشد.</div>
                )}
                {itemsToDisplay.map(item => (
                    <div className="col-lg-4 col-xs-6 col-sm-6">
                        <Link to={`city/${item.id}`}  className="position-city border-city " key={item.id}>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
            <div>
            </div>
        </div>
    );
}
export default Dashboard;