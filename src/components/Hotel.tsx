import React, { useState, useEffect } from 'react'
import { HotelInterface } from '../interfaces/Hotel.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import BaseRequest from '../helpers/BaseRequest';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
//import CustomTable from './Table';


export default function Hotel() {
      

    var rows: HotelInterface[] = [];
    const { serviceId, country } = useParams();
    const [hotel, setHotel] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setHotel(res);

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
    return <CustomTable headCells={headCells} rows={hotel} />
}