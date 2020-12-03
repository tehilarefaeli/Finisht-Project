import React, { useState, useEffect } from 'react'
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { UserInterface } from '../interfaces/User.intarface';
import { useParams } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';

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
        { id: 'userName', label: ' User Name', numeric: false, disablePadding: true, },
        { id: 'country', label: 'Country', numeric: false, disablePadding: true, },
        { id: 'language', label: 'Language', numeric: false, disablePadding: true, },
        { id: 'email', label: ' Email', numeric: false, disablePadding: true, },
        { id: 'password', label: 'Password ', numeric: false, disablePadding: true, },
        { id: 'permission', label: 'Permission', numeric: false, disablePadding: true, },
    ];
    return <CustomTable headCells={headCells} rows={rows} />
}