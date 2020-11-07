import React from 'react'
import { RestaurantInterface } from '../interfaces/Restaurant.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { SiteInterface } from '../interfaces/Site.interface';

export default function Site() {
    function createData(
        name: string,
        phone: number,
        address: string,
        city: string,
        typeOfActivity: string,
        age: string,

    ): SiteInterface {
        return { name, phone, address, city, typeOfActivity, age };
    }

    const rows = [
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'dd'),
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'dd'),
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'dd'),
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'dd'),
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'dd'),
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'dd'),


    ];

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name' },
        { id: 'address', label: 'Address' },
        { id: 'phone', label: 'Phone' },
        { id: 'city', label: 'City' },
        { id: 'typeOfActivity', label: 'Type Of Activity' },
        { id: 'age', label: 'Age' },




    ];
    return <CustomTable headCells={headCells} rows={rows} />
}