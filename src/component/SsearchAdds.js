import React from "react";
import '../styles/searchAdds.css';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class SsearchAdds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});
    console.log(this.state.value)
    }


    render() {
        return (<div className="pos-t col-xs-12 col-lg-12 col-xl-8">
            <br/><br/><br/><br/><br/>
            <div className="mb-2 d-sm-inline-flex txtright input-adds col-lg-8 mar">
                <input className="form-control right-dir " type="search"   placeholder="جستجوی آگهی">
                </input>
                <div className="d-none d-lg-block">
                    <DropdownButton
                        className="right-dir colors "
                        as={ButtonGroup}
                        key={ 'down'}
                        id={`dropdown-button-drop-down}`}
                        drop={'down'}
                        variant=""
                        title="همه آگهی ها"
                    >
                        <div className="d-inline text-right" >
                                <DropdownButton
                                    className="my-dir text-right"
                                    key="left"
                                    id={`dropdown-button-drop-left`}
                                    drop='left'
                                    variant="white"
                                    title="املاک"
                                >
                                    
                                    <DropdownButton
                                    className="my-dir text-right"
                                    key="left"
                                    id={`dropdown-button-drop-left`}
                                    drop='left'
                                    variant="white"
                                    title=" فروش مسکن"
                                >    
                                    <Dropdown.Item className="text-right" eventKey="">آپارتمان</Dropdown.Item>
                                    <Dropdown.Item className=" text-right" eventKey=""> خانه و ویلا</Dropdown.Item>
                                    <Dropdown.Item className="text-right" eventKey=""> زمین و کلنگی</Dropdown.Item>
                                    <Dropdown.Item className="text-right" eventKey="">همه آگهی های فروش مسکن</Dropdown.Item>              
                                    </DropdownButton>
                                    <Dropdown.Divider />
                                    <DropdownButton
                                    className="my-dir text-right"
                                    key="left"
                                    id={`dropdown-button-drop-left`}
                                    drop='left'
                                    variant="white"
                                    title="اجاره مسکن"
                                > 
                                    <Dropdown.Item className="text-right"  eventKey="">آپارتمان</Dropdown.Item>
                                    <Dropdown.Item className="text-right"  eventKey=""> خانه و ویلا</Dropdown.Item>
                                    <Dropdown.Item className="text-right"  eventKey="">همه آگهی های اجاره مسکونی</Dropdown.Item>
                                    </DropdownButton>
                                    <Dropdown.Divider />
                                    <DropdownButton
                                    className="my-dir text-right"
                                    key="left"
                                    id={`dropdown-button-drop-left`}
                                    drop='left'
                                    variant="white"
                                    title="فروش اداری و تجاری"
                                > 
                            
                                    <Dropdown.Item className="text-right"  eventKey="">دفتر کار،اتاق اداری و مطب</Dropdown.Item>
                                    <Dropdown.Item className="text-right"  eventKey="">مغازه و غرفه</Dropdown.Item>
                                    <Dropdown.Item className="text-right"  eventKey="">صنعتی،کشاورزی و تجاری</Dropdown.Item>
                                    <Dropdown.Item className="text-right"  eventKey="">همه آگهی های فروش اداری و تجاری</Dropdown.Item>
                                    </DropdownButton>   
                                </DropdownButton>
                        </div>
                        <DropdownButton
                                    className="my-dir text-right"
                                    key="left"
                                    id={`dropdown-button-drop-left`}
                                    drop='left'
                                    variant="white"
                                    title="وسایل نقلیه"
                                > 
                                  <DropdownButton
                                    className="my-dir text-right"
                                    key="left"
                                    id={`dropdown-button-drop-left`}
                                    drop='left'
                                    variant="white"
                                    title="خودرو"
                                > 
                                
                        <Dropdown.Item className="text-right"  eventKey="">سواری</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">کلاسیک</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">اجاره ایی</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">سنگین</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">همه آگهی های خودرو</Dropdown.Item>
                        </DropdownButton>
                        <Dropdown.Item className="text-right"  eventKey="">قطعات یدکی و لوازم جانبی</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">موتورسیکلت و لوازم جانبی</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">قایق و لوازم جانبی</Dropdown.Item>
                        </DropdownButton>
                        <Dropdown.Item className="text-right"  eventKey="">لوازم الکترونیکی</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey=""> مربوط به خانه</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">خدمات</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">وسایل شخصی</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">سرگرمی و فراغت</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">اجتماعی</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">برای کسب و کار</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">استخدام و کاریابی</Dropdown.Item>
                        <Dropdown.Item className="text-right"  eventKey="">انجام پروژه</Dropdown.Item>

                    </DropdownButton>
                    </div>
            </div>





        </div>);
    }
}

export default SsearchAdds;