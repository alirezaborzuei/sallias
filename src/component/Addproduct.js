import React from "react";
import { Link } from 'react-router-dom';
import { allcatergory } from '../data/allcategory'
import { tes } from '../data/test'
import "../styles/Addproduct.css"
class Addproduct extends React.Component {
    constructor(props) {
        super(props);
    }
    handle(e) {
        e.preventDefault();

    }
    render() {
        return (
            <div className=" col-sm-12 col-xs-12 col-lg-10 text-right ">
                <br /><br /><br /><br /><br /><br />

                {tes.map((item) => {
                    return (
                        <div className="expanded-back">
                            <li key={item.id}>
                                <button onClick={this.handle.bind(this)}>{item.name}</button>

                            </li>

                        </div>
                    )
                }

                )}

                <h1 className="submit-title">ثبت آگهی رایگان</h1>
                <div className="">

                </div>

            </div>

        );
    }


}

export default Addproduct;