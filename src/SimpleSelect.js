import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';


class SimpleSelect extends React.Component {
    state = {
        location : "Deurne"
    }

    setLocation = (location) => {
        this.setState({'location': location})
    }

    // const [location, setLocation] = React.useState('Deurne');
    handleChange = (event) => {
      this.setLocation(event.target.value);
    };

    render() {

        return (
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.location}
                onChange={this.handleChange}
            >
                <MenuItem value="Deurne">Deurne</MenuItem>
                <MenuItem value="Kontich">Kontich</MenuItem>
            </Select>
        );
    }
}

export default SimpleSelect;
