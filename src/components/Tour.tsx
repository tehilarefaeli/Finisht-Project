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
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'city', label: 'City', },
        { id: 'guide', label: ' Guide', },
        { id: 'phoneGuide', label: 'Phone Guide', },
        { id: 'placeOfDeparture', label: 'Place Of Departure', },
        { id: 'duration', label: 'Duration', },
        { id: 'trak', label: 'Trak', },
        { id: 'age', label: 'Age', },
        { id: 'duscription', label: 'Duscription' },
    ];
    return <CustomTable headCells={headCells} rows={rows} />
}