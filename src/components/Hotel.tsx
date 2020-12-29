import React, { useState, useEffect } from 'react'
import { HotelInterface } from '../interfaces/Hotel.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import BaseRequest from '../helpers/BaseRequest';
import { useParams } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import ldsh from 'lodash';
//import axios from 'axios';
//import CustomTable from './Table';


export default function Hotel() {





    var rows: HotelInterface[] = [];
    const { serviceId, country } = useParams();
    const [hotel, setHotel] = useState<any[]>([])
    const [filteredHotels, setFilteredHotels] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setHotel(res);
            setFilteredHotels(res);
        }
        ).catch(e => console.log(e))
    }, []);



    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'manager', label: 'Manager', },
        { id: 'stars', label: 'Stars', },

    ];
    // const managerCells: HeadCell[] = [
    //     { id: 'edit', label: ' Edit', numeric: false, disablePadding: true, },
    //     { id: 'delete', label: 'Delete', numeric: true, disablePadding: false, },


    // ];

    const res =ldsh.union();
    return <div>
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            //לבדוק איך משתמשים עם לודש ויוניון כדי למנוע כפולים
            options={filteredHotels.map((hotel) => hotel.name).concat(
                filteredHotels.map((hotel) => hotel.address),
                filteredHotels.map((hotel) => hotel.city),
                filteredHotels.map((hotel) => hotel.manager),
                //filteredHotels.map((hotel) => hotel.start),
            )
            }
            onKeyUp={(e: any) => {
                const newValue = e.target.value;
                if (newValue == "") {
                    setFilteredHotels(hotel);
                } else {
                    const modifiedHotels = filteredHotels.filter(h => {
                        return h.name.includes(newValue) || h.city.includes(newValue)
                            || h.address.includes(newValue) || h.manager.includes(newValue);
                    });
                    setFilteredHotels(modifiedHotels);
                }
            }}
            onChange={(e: any, newValue: any) => {
                if (newValue == "")
                    setFilteredHotels(hotel);
                else {
                    const modifiedHotels = filteredHotels.filter(h => {

                        return h.name.includes(newValue) || h.city.includes(newValue)
                            || h.address.includes(newValue) || h.manager.includes(newValue);
                    });
                    setFilteredHotels(modifiedHotels);
                }
            }}
            // onBlur={(e: any) => {
            //     if (e.target.value == "")
            //         setFilteredHotels(hotel);
            //     else {
            //         const modifiedHotels = filteredHotels.filter(h => h.name.includes(e.target.value));
            //         setFilteredHotels(modifiedHotels);
            //     }
            // }}

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

        {/* permission={1} managerCells={managerCells} */}
        {<CustomTable headCells={headCells} rows={filteredHotels} />}

    </div>
}