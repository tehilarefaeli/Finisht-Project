

import React, { useState, useEffect } from 'react'
import { RestaurantInterface } from '../interfaces/Restaurant.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { useParams } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import BaseRequest from '../helpers/BaseRequest';
import ldsh from 'lodash';


export default function Restaurant() {
    var rows: RestaurantInterface[] = [];
    const { serviceId, country } = useParams();
    const [restaurant, setRestaurant] = useState<any[]>([])
    const [filteredRestaurant, setFilteredRestaurant] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setRestaurant(res);
            setFilteredRestaurant(res);

        }
        ).catch(e => console.log(e))
    }, []);




    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'cosher', label: 'Cosher', },
    ];

    const getOptions = () => {
        return ldsh.union(filteredRestaurant.map((restaurant) => restaurant.name),
            filteredRestaurant.map((restaurant) => restaurant.address),
            filteredRestaurant.map((restaurant) => restaurant.phone),
            filteredRestaurant.map((restaurant) => restaurant.city),
            filteredRestaurant.map((restaurant) => restaurant.cosher))
    }
    return <div>

        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={getOptions()}
            onKeyUp={(e: any) => {
                const newValue = e.target.value;
                if (newValue == "")
                    setFilteredRestaurant(restaurant);
                else {
                    const modifiedRestaurant = filteredRestaurant.filter(h => {
                        return h.name.includes(newValue)
                            || h.address.includes(newValue)
                            || h.phone.includes(newValue) || h.city.includes(newValue)
                            || h.cosher.includes(newValue);
                    });
                    setFilteredRestaurant(modifiedRestaurant);
                }
            }}
            onChange={(e: any, newValue: any) => {
                if (newValue == "") {
                    setFilteredRestaurant(restaurant);
                }
                else {
                    const modifiedRestaurant = filteredRestaurant.filter(h => {
                        return h.name.includes(newValue) || h.city.includes(newValue)
                            || h.address.includes(newValue) || h.cosher.includes(newValue)
                            || h.phone.includes(newValue);
                    });
                    setFilteredRestaurant(modifiedRestaurant);
                }
            }}

            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
            )}

        />

        <CustomTable headCells={headCells} rows={filteredRestaurant} />



    </div>
}