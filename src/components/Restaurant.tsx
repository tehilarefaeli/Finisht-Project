import React, { useState, useEffect } from 'react'
import { RestaurantInterface } from '../interfaces/Restaurant.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { useParams } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';

export default function Restaurant() {
    



    var rows: RestaurantInterface[] = [];
    const { serviceId, country } = useParams();
    const [restaurant, setRestaurant] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setRestaurant(res);

        }
        ).catch(e => console.log(e))
    }, []);




    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name',  },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'cosher', label: 'Cosher',  },


    ];
    return <CustomTable headCells={headCells} rows={restaurant} />
}