import React from 'react'
import { RestaurantInterface } from '../interfaces/Restaurant.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';

export default function Restaurant() {
    function createData(
        name: string,
        phone: number,
        address: string,
        city: string,
        cosher: string
    ): RestaurantInterface {
        return { name, phone, address, city, cosher };
    }

    const rows = [
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr'),
        createData('Donut', 452, 'wwwwww', 'rrrrrr', 'ooooooo',),
        createData('Eclair', 262, 'bbbbbb', 'zzzzzz', 'opppp',),
        createData('Frozen yoghurt', 159, 'jjjjjj', 'nnnnnn', 'qqqqqqq'),
        createData('Gingerbread', 356, 'lllllll', 'iiiiiii', 'mmmmm'),
        createData('Honeycomb', 408, 'bbbbb', 'aaaaa', 'm',),
    ];

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', numeric: false, disablePadding: true, },
        { id: 'address', label: 'Address', numeric: false, disablePadding: true, },
        { id: 'phone', label: 'Phone', numeric: false, disablePadding: true, },
        { id: 'city', label: 'City', numeric: false, disablePadding: true, },
        { id: 'cosher', label: 'Cosher', numeric: false, disablePadding: true, },


    ];
    return <CustomTable headCells={headCells} rows={rows} />
}