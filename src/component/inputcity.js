import React from "react";
import {Multiselect} from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import '../styles/inputcity.css'

function filterLastName(city, value) {
    let name = city.name
    let search = value
    return name.indexOf(search) === 0
}

const OptionSelect = (props) => {

    return (
        <div className="inputsindex">
            <Multiselect
                         data={props.data}
                         textField='name'
                         filter={filterLastName}
                         minlenght={props.minlenght}
            />
        </div>
    );
}
export default OptionSelect;