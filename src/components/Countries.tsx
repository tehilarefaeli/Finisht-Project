/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import newspaper from '../assets/newspaper.jpg';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { Country } from '../interfaces/Country.interface';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Italy from '../assets/Italy.png'
import Israel from '../assets/Israel.png';
import France from '../assets/France.png';
import United_Kingdom from '../assets/United_Kingdom.png';
import RecipeReviewCard from './Cards';
import { useHistory } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';
import { addCountry, removeCountry } from '../state/ActionCreator';
import countryReducer from '../state/countryReducer';

export default function Countries() {
    let i = 0;
    const dispatch: Dispatch<any> = useDispatch();
    const [countries, setCountries] = useState<Country[]>([

        { name: 'Israel', flag: Israel, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        { name: 'United Kingdom', flag: United_Kingdom, isFavorite: true, id: 'a' + (i = i + 1).toString() },
        { name: 'France', flag: France, isFavorite: false, id: 'a' + (i = i + 1).toString() },
        //{ name: 'Italy', flag: France, isFavorite: false, id: 'a' + (i = i + 1).toString() }


    ]);
    const [countriesList, setCountriesList] = useState<any[]>([])

    const [serviceList, setServiceList] = useState<any[]>([])
    const [countrySelected, setCountrySelected] = useState<string>('')
    const history = useHistory();//מילה שמורה בשביל ניתוב בין עמודים
    // useEffect(() => {
    //     BaseRequest('countries/getCountries').then(res => {
    //         console.log("useEffect", res);
    //         setCountries(res);
    //     }
    //     ).catch(e => console.log(e))
    // }, []);


    const updateIsFavorite = (id: string) => {
        let arr = [...countries]
        arr.forEach(a => {
            if (a.id === id)
                a.isFavorite = !a.isFavorite
        })
        setCountries(arr);
        const country = arr.find(c => c.id == id);
        if (country?.isFavorite == true) {
            dispatch(addCountry(country));
        } else {
            if (country)
                dispatch(removeCountry(country));
        }
    }
    useEffect(() => {
        BaseRequest('countries/getCountry').then(res => {
            console.log("useEffect", res);
            setCountriesList(res);
        }
        ).catch(e => console.log(e))
    }, []);

    useEffect(() => {
        BaseRequest('services/getService').then(res => {
            console.log("useEffect", res);
            setServiceList(res);
        }
        ).catch(e => console.log(e))
    }, []);

    const ServiceChange = (e: any, option: any) => {
        console.log(option)
        let route = option.serviceName//option.serviceName.charAt(0).toLowerCase() + option.serviceName.slice(1);
        console.log(route)
        const serviceId = option.id;
        console.log(serviceId);
        history.push(`/${route}/${serviceId}/${countrySelected}`);
    }
    const selectCountry = (e: any, newValue: any) => {
        console.log('dfghjklkjhg', newValue.country);
        setCountrySelected(newValue.country);
        localStorage.setItem('bbb', newValue.country);

        history.push('/s')
    }
    const selectCountryCard = (country:any) => {
        console.log('dfghjklkjhg', country.name);
        setCountrySelected(country.name);
        localStorage.setItem('bbb', country.name);

        history.push('/s');
    }


    // <div style={{
    //     backgroundImage: `url(${newspaper})`,
    //     backgroundRepeat: 'repeat',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     textAlign: "right",
    //     direction: "rtl",
    //     padding: '10%',
    // }}>
    return (
        <div className="parent" style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "right",
            direction: "rtl",
            padding: '10%',
        }}>
            <Autocomplete
                //id="country
                className="country"
                id="standard-error-helper-text"
                options={countriesList}
                //options={top100Films}
                onChange={selectCountry}
                getOptionLabel={(option) => {
                    console.log(option);
                    return option.country;
                }}
                style={{ width: 348 }}
                renderInput={(params) => <TextField {...params} label="Choose Country" variant="outlined" />}
            />

            {/* {
                countrySelected &&
                <Autocomplete
                    //id="service"
                    className="ssss"
                    options={serviceList}
                    getOptionLabel={(option) => option.serviceName}
                    style={{ width: 348 }}
                    onChange={ServiceChange}
                    renderInput={(params) => <TextField {...params} label="Choose Service" variant="outlined" />}
                />
            } */}
            {
                countries.map((c, idx,) => {
                    return <RecipeReviewCard key={idx} country={c} handleClick={(country: Country) => selectCountryCard(country)} setCountry={(id: string) => updateIsFavorite(id)}
                    />

                })
            }


        </div>
    );

}

