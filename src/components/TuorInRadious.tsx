

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import countries from '../assets/json/countries.json'
import React from 'react'
import Logo from '../assets/Logo.png';
//import App from './components/Tehila';
export default function CountryInRadiuos() {



    return (
        <div>
            <Autocomplete
                //id="country
                className="country"
                id="standard-error-helper-text"
                options={countries}
                getOptionLabel={(option) => option.name}
                style={{ width: 348 }}
                renderInput={(params) => <TextField {...params} label="Choose Country" variant="outlined" />}
            />
            <br/>
            <TextField
                autoComplete="zipCode"
                name="zipCode"
                variant="outlined"
                // required
                //fullWidth
                id="zipCode"
                label="Enter Zip Code"
                autoFocus
            />

        </div>

    )
}











