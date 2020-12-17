import React, { useState, useEffect } from 'react'
import { HotelInterface } from '../interfaces/Hotel.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import BaseRequest from '../helpers/BaseRequest';
import { useParams } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
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
        { id: 'name', label: ' Name', numeric: false, disablePadding: true, },
        { id: 'address', label: 'Address', numeric: true, disablePadding: false, },
        { id: 'phone', label: 'Phone', numeric: true, disablePadding: false, },
        { id: 'city', label: 'City', numeric: true, disablePadding: false, },
        { id: 'manager', label: 'Manager', numeric: true, disablePadding: false, },
        { id: 'stars', label: 'Stars', numeric: true, disablePadding: false, },

    ];

    const managerCells: HeadCell[] = [
        { id: 'edit', label: ' Edit', numeric: false, disablePadding: true, },
        { id: 'delete', label: 'Delete', numeric: true, disablePadding: false, },


    ];


    const filterHotels = (e: any, newValue: any) => {
        if (newValue == "")
            setFilteredHotels(hotel);
        else {
            const modifiedHotels = filteredHotels.filter(h => h.name.includes(newValue));
        }
    }


    return <div>
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={filteredHotels.map((hotel) => hotel.name).concat(
                filteredHotels.map((hotel) => hotel.address)
            )}
            onChange={(e: any, newValue: any) => {
                if (newValue == "")
                    setFilteredHotels(hotel);
                else {
                    const modifiedHotels = filteredHotels.filter(h => h.name.includes(newValue));
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
        <CustomTable headCells={headCells} rows={filteredHotels} permission={1} managerCells={managerCells}/>
    </div>
}