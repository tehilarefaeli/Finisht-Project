import React from 'react'
import { SynagogueInterface } from '../interfaces/Synagogue.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';

export default function Synagogue() {
    function createData(
        name: string,
        phone: number,
        address: string,
        city: string,
        rabbi: string,
        nusach: string,
        community: string
    ): SynagogueInterface {
        return { name, phone, address, city, rabbi, nusach, community };
    }

    const rows = [
        createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'yy', 'yy'),
        createData('Donut', 452, 'wwwwww', 'rrrrrr', 'ooooooo', 'yy', 'yy'),
        createData('Eclair', 262, 'bbbbbb', 'zzzzzz', 'opppp', 'yy', 'yy'),
        createData('Frozen yoghurt', 159, 'jjjjjj', 'nnnnnn', 'qqqqqqq', 'yy', 'yy'),
        createData('Gingerbread', 356, 'lllllll', 'iiiiiii', 'mmmmm', 'yy', 'yy'),
        createData('Honeycomb', 408, 'bbbbb', 'aaaaa', 'm', 'yy', 'yy'),
    ];

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', numeric: false, disablePadding: true, },
        { id: 'address', label: 'Address', numeric: false, disablePadding: true, },
        { id: 'phone', label: 'Phone', numeric: false, disablePadding: true, },
        { id: 'city', label: 'City', numeric: false, disablePadding: true, },
        { id: 'rabbi', label: 'Rabbi', numeric: false, disablePadding: true, },
        { id: 'nusach', label: 'Nusach', numeric: false, disablePadding: true, },
        { id: 'community', label: 'Community', numeric: false, disablePadding: true, },


    ];
    return <CustomTable headCells={headCells} rows={rows} />
}