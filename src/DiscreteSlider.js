import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from "@material-ui/core/InputLabel";


class DiscreteSlider extends React.Component {

    handleChange = (event) => {
      var newValue = event.target.value;
      this.props.onChange(newValue);
    };

    render() {
        return (
            <Slider
                defaultValue={this.props.defaultValue}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={this.props.min}
                max={this.props.max}
                onChange={this.handleChange}
            />
        );
    }
}

export default DiscreteSlider;