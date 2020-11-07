import React from 'react'
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { TourInterface } from '../interfaces/Tour.interface';
import { UserInterface } from '../interfaces/User.intarface';

export default function User() {
    function createData(
        userName: string,
        country: string,
        language: string,
        email: string,
        password: string,
        permission: string,
    ): UserInterface {
        return { userName, country, language, email, password, permission };
    }

    const rows = [
        createData('Cupcakem', 'c', 'g', 'b', '555', 'aaaaaaa',),
        createData('Cupcakem', 'c', 'g', 'b', '555', 'aaaaaaa',),
        createData('Cupcakem', 'c', 'g', 'b', '555', 'aaaaaaa',),
        createData('Cupcakem', 'c', 'g', 'b', '555', 'aaaaaaa',),
        createData('Cupcakem', 'c', 'g', 'b', '555', 'aaaaaaa',),
        createData('Cupcakem', 'c', 'g', 'b', '555', 'aaaaaaa',),

    ];

    const headCells: HeadCell[] = [
        { id: 'userName', label: ' User Name' },
        { id: 'country', label: 'Country' },
        { id: 'language', label: 'Language' },
        { id: 'email', label: ' Email' },
        { id: 'password', label: 'Password ' },
        { id: 'permission', label: 'Permission' },
    ];
    return <CustomTable headCells={headCells} rows={rows} />
}