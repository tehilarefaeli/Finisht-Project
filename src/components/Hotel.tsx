import React from 'react'
import { HotelInterface } from '../interfaces/Hotel.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';

export default function Hotel() {
    function createData(
        name: string,
        phone: number,
        address: string,
        city: string,
        manager: string,
        stars?: number,
    ): HotelInterface {
        return { name, phone, address, city, manager, stars };
    }

    const rows = [
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr'),
        createData('Donut', 452, 'wwwwww', 'rrrrrr', 'ooooooo', 4),
        createData('Eclair', 262, 'bbbbbb', 'zzzzzz', 'opppp', 6),
        createData('Frozen yoghurt', 159, 'jjjjjj', 'nnnnnn', 'qqqqqqq', 24),
        createData('Gingerbread', 356, 'lllllll', 'iiiiiii', 'mmmmm', 3.9),
        createData('Honeycomb', 408, 'bbbbb', 'aaaaa', 'm', 87,),
    ];

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name' },
        { id: 'address', label: 'Address' },
        { id: 'phone', label: 'Phone' },
        { id: 'city', label: 'City' },
        { id: 'manager', label: 'Manager' },
        { id: 'stars', label: 'Stars' },

    ];
    return <CustomTable headCells={headCells} rows={rows} />
}