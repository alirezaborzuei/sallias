import React from "react";
import { Multiselect } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
function filterLastName(city, value) {
    let name = city.name
    let search  = value
    return name.indexOf(search) === 0
}


const OptionSelect = (props) => {
    return(
    <div >

        <Multiselect

            data={props.data}
            textField='name'
            filter={filterLastName}
        />
    </div>
);}
export default OptionSelect;