import React from 'react';
import "../styles/Dashboard.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
const Dashboard = () => (
    <div className="welcome">
       <div className="textStyle">
           <br></br>
           <span>  
سالیاس! پایگاه خرید و فروش بی‌واسطه‌
           </span>
           <br/>
           <span>
           اگه دنبال چیزی هستی، شهرت رو انتخاب کن و تو دسته‌بندی‌ها به دنبالش بگرد.
           </span>
           <br/>
           <span> اگر هم می‌خوای چیزی بفروشی، چند تا عکس خوب ازش بگیر و آگهیت رو بچسبون به سالیاس .
               
           </span>
           <hr className="hr"/>
    <div>
         <a href="#"><img alt="3" src="/assert/3.png" className="logo"/></a>
         <a href="#"><img alt="2" src="/assert/2.png" className="logo"/></a>
        <a href="#"><img alt="1" src="/assert/1.png" className="logo"/></a>
        
        
    </div>
    <hr className="hr"/>
    <div>
        <span className="bold">  سالیاس </span>
        <span>را در شبکه های اجتماعی دنبال نمائید:</span>
    </div>
        <div className="">
            <Link herf="#" ><TelegramIcon  class="iconsize "/></Link>
            <a herf="#" ><TwitterIcon  class="iconsize "/></a>
            <a herf="#" ><InstagramIcon  class="iconsize "/></a>
        </div>

       </div>
       
       <div className="combo-box">
        <Autocomplete className="size-w"
      options={city}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => <TextField {...params} label=" شهرتان" variant="outlined" />}

    />
        </div>
    <div>

    </div>
    </div>
);
const city = [
    { title: 'کرج' },
    { title: 'تهران' },
    { title: 'شیراز' },
];
export default Dashboard;
