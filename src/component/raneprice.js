import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import '../styles/rangeprice.css'
const useStyles = makeStyles({
    root: {
        width: 300,
    },
});
function valuetext(value) {
    return `${value}تومان`;
}
export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 1000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <pre> محدوده قیمت(بر حسب میلیون)</pre>
            <Typography id="range-slider" gutterBottom>

            </Typography>
            <Slider
                min={0}
                step={1}
                max={1000}
                scale={(x) => x }
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}