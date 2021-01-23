import React, { useState, useRef, useEffect } from 'react';
import axios from "axios";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import BaseJsonRequest from '../helpers/BaseJsonRequest';
import Countries from '../assets/json/countries.json';
export default function Zipcode() {

  const [countriesList, setCountriesList] = useState<any[]>([])
  const [serviceList, setServiceList] = useState<any[]>([])
  const [countrySelected, setCountrySelected] = useState<string>('')

  const options: any = {
    method: 'GET',
    url: 'https://global-address.p.rapidapi.com/V3/WEB/GlobalAddress/doGlobalAddress',
    params: {
      ctry: 'DEU',
      DeliveryLines: 'Off',
      a1: 'Gießener Str. 30',
      format: 'json',
      postal: '60435',
      a2: 'Frankfurt am Main'
    },
    headers: {
      'x-rapidapi-key': 'b29a8dcf03msh8d88aa3bdc39aa5p1c75d8jsn7de577befb8f',
      'x-rapidapi-host': 'global-address.p.rapidapi.com'
    }
  };


  useEffect(() => {

    axios.request(options).then(function (res) {
      console.log(res.data);
    }).catch(function (error) {
      console.error(error);
    });

  })
  useEffect(() => {
   
      setCountriesList(Countries);
      console.log(countriesList);
      
    
  });

  const selectCountry = (e: any, newValue: any) => {
    console.log(newValue);
    setCountrySelected(newValue?.country)
  }



  return <div>
    <Autocomplete
      //id="country
      className="country"
      id="standard-error-helper-text"
      options={countriesList}
      //options={top100Films}
      onChange={selectCountry}
      getOptionLabel={(option) => {
        console.log(option);
        return option.name;
      }}
      style={{ width: 348 }}
      renderInput={(params) => <TextField {...params} label="Choose Country" variant="outlined" />}
    />



  </div>


}