import React, { useState, useEffect } from 'react'
import { SynagogueInterface } from '../interfaces/Synagogue.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { useParams } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';

export default function Synagogue() {
    // function createData(
    //     name: string,
    //     phone: number,
    //     address: string,
    //     city: string,
    //     rabbi: string,
    //     nusach: string,
    //     community: string
    // ): SynagogueInterface {
    //     return { name, phone, address, city, rabbi, nusach, community };
    // }

    // const rows = [
    //     createData('Cupcake', 555, 'aaaaaaa', 'vvvvvv', 'rrrrrr', 'yy', 'yy'),
    //     createData('Donut', 452, 'wwwwww', 'rrrrrr', 'ooooooo', 'yy', 'yy'),
    //     createData('Eclair', 262, 'bbbbbb', 'zzzzzz', 'opppp', 'yy', 'yy'),
    //     createData('Frozen yoghurt', 159, 'jjjjjj', 'nnnnnn', 'qqqqqqq', 'yy', 'yy'),
    //     createData('Gingerbread', 356, 'lllllll', 'iiiiiii', 'mmmmm', 'yy', 'yy'),
    //     createData('Honeycomb', 408, 'bbbbb', 'aaaaa', 'm', 'yy', 'yy'),
    // ];
    var rows: SynagogueInterface[] = [];
    const { serviceId, country } = useParams();
    const [synagogue, setSynagogue] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setSynagogue(res);

        }
        ).catch(e => console.log(e))
    }, []);


    const headCells: HeadCell[] = [
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'name', label: ' Name', },
        { id: 'rabbi', label: 'Rabbi', },
        { id: 'nusach', label: 'Nusach', },
        { id: 'community', label: 'Community', },


    ];
    return <CustomTable headCells={headCells} rows={synagogue} />
}