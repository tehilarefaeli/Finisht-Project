import React, { useState, useEffect } from 'react'
import { SynagogueInterface } from '../interfaces/Synagogue.interface';
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { useParams } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ldsh from 'lodash';
export default function Synagogue() {

    var rows: SynagogueInterface[] = [];
    const { serviceId, country } = useParams();
    const [synagogue, setSynagogue] = useState<any[]>([])
    const [filteredSynagogue, setFilteredSynagogue] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setSynagogue(res);
            setFilteredSynagogue(res);



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



    const getOptions = () => {
        return ldsh.union(filteredSynagogue.map((synagogue) => synagogue.address),
            filteredSynagogue.map((synagogue) => synagogue.phone),
            filteredSynagogue.map((synagogue) => synagogue.city),
            filteredSynagogue.map((synagogue) => synagogue.name),
            filteredSynagogue.map((synagogue) => synagogue.rabbi),
            filteredSynagogue.map((synagogue) => synagogue.nusach),
            filteredSynagogue.map((synagogue) => synagogue.community))
    }
    const s = (newValue: any) => {
        const modifiedSynagogues = filteredSynagogue.filter(h => {
            return h.address.includes(newValue) || h.phone.includes(newValue)
                || h.city.includes(newValue) || h.name.includes(newValue)
                || h.rabbi.includes(newValue) || h.nusach.includes(newValue)
                || h.community.includes(newValue);
        });
        setFilteredSynagogue(modifiedSynagogues);
    }


    return <div>
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            className="auto"
            options={getOptions()}
            onKeyUp={(e: any) => {
                const newValue = e.target.value;
                if (newValue == "")
                    setFilteredSynagogue(synagogue);
                else
                    s(newValue);


            }}
            onChange={(e: any, newValue: any) => {
                if (newValue == "") {
                    setFilteredSynagogue(synagogue);
                }
                else
                    s(newValue);
            }}

            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
            )}
        />
        {<CustomTable headCells={headCells} rows={filteredSynagogue} />}
    </div>
}