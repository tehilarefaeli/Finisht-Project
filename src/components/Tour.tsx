import React from 'react'
import { RestaurantInterface } from '../interfaces/Restaurant.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { TourInterface } from '../interfaces/Tour.interface';

export default function Tour() {
    function createData(
        name: string,
        address: string,
        city: string,
        guide: string,
        phoneGuide: number,
        placeOfDeparture: string,
        duration: string,
        trak: string,
        age: number,
        duscription: string
    ): TourInterface {
        return { name, address, guide, city, phoneGuide, placeOfDeparture, duration, trak, age, duscription };
    }

    const rows = [
        createData('Cupcakem', 'c', 'g', 'b', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 2, 'kkk'),
        createData('Cupcakem', 'c', 'g', 'b', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 2, 'kkk'),
        createData('Cupcakem', 'c', 'g', 'b', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 2, 'kkk'),
        createData('Cupcakem', 'c', 'g', 'b', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 2, 'kkk'),
        createData('Cupcakem', 'c', 'g', 'b', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 2, 'kkk'),

    ];

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', numeric: false, disablePadding: true, },
        { id: 'address', label: 'Address', numeric: false, disablePadding: true, },
        { id: 'city', label: 'City', numeric: false, disablePadding: true, },
        { id: 'guide', label: ' Guide', numeric: false, disablePadding: true, },
        { id: 'phoneGuide', label: 'Phone Guide', numeric: false, disablePadding: true, },
        { id: 'placeOfDeparture', label: 'Place Of Departure', numeric: false, disablePadding: true, },
        { id: 'duration', label: 'Duration', numeric: false, disablePadding: true, },
        { id: 'trak', label: 'Trak', numeric: false, disablePadding: true, },
        { id: 'age', label: 'Age', numeric: false, disablePadding: true, },
        { id: 'duscription', label: 'Duscription', numeric: false, disablePadding: true, },
    ];
    return <CustomTable headCells={headCells} rows={rows} />
}