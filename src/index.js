import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Slider from '@material-ui/core/Button';
import DiscreteSlider from "./DiscreteSlider";
import {Container} from "@material-ui/core";
import SimpleSelect from "./SimpleSelect";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function App() {

    const classes = useStyles();

    const knooppunten = {
        "Deurne": [
            {"name": "StraatA - StraatB", "location": [3.2, 5.2]},
            {"name": "StraatA - StraatB", "location": [3.2, 5.2]},
            {"name": "StraatA - StraatB", "location": [3.2, 5.2]},
            {"name": "StraatA - StraatB", "location": [3.2, 5.2]},
            {"name": "StraatA - StraatB", "location": [3.2, 5.2]},
            {"name": "StraatA - StraatB", "location": [3.2, 5.2]}]
    }

    const manoeuvres = [
        "Keren in straat",
        "Links haaks",
        "Rechts haaks",
        "Links parallel",
        "Rechts parallel",
        "Recht achteruit"
    ]

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }


    const updateManoeuvres = (count) => {
        console.log(count)
        var selectedManoeuvres = getRandom(manoeuvres, count);
        const listItems = selectedManoeuvres.map((manoeuvre) =>
            <li>{manoeuvre}</li>
        );
        return listItems;
    }

    var state = {
        manoeuvres: updateManoeuvres(2)
    }



    return (
        <Container>
            <h2>Instellingen</h2>


            <InputLabel id="demo-simple-select-label">Examencentrum</InputLabel>
            <SimpleSelect></SimpleSelect>

            {/*<InputLabel id="demo-simple-select-label">Aantal knooppunten</InputLabel>*/}
            {/*<DiscreteSlider></DiscreteSlider>*/}

            <InputLabel id="demo-simple-select-label">Aantal manoeuvres</InputLabel>
            <DiscreteSlider min={0} max={manoeuvres.length} defaultValue={2}
                            onChange={updateManoeuvres}></DiscreteSlider>

            <h2>Output</h2>
            <h3>Manoeuvres</h3>
            <ul>{state.manoeuvres}</ul>
        </Container>
    )
        ;
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


