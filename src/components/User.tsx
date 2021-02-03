import React, { useState, useEffect } from 'react'
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { UserInterface } from '../interfaces/User.intarface';
import { useParams } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';
import ldsh from 'lodash';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';


export default function User() {
    var rows: UserInterface[] = [];
    //const { serviceId, country, id } = useParams();
    const [user, setUser] = useState<any[]>([])
    const [filteredUsers, setFilteredUsers] = useState<any[]>([])



    useEffect(() => {
        //console.log("params: )
        BaseRequest(`users/getUsers`).then(res => {
            console.log("useEffect", res);
            setUser(res);
            setFilteredUsers(res);
        }
        ).catch(e => console.log(e))
    }, []);

    const headCells: HeadCell[] = [
        { id: 'userName', label: ' User Name', },
        { id: 'country', label: 'Country', },
        { id: 'language', label: 'Language', },
        { id: 'email', label: ' Email', },
        { id: 'password', label: 'Password ', },
        { id: 'permission', label: 'Permission', },
    ];


    const getOptions = () => {
        return ldsh.union(filteredUsers.map((user) => user.name),
            filteredUsers.map((user) => user.country),
            filteredUsers.map((user) => user.language))
    }
    const h = (newValue: any) => {
        const modifiedusers = filteredUsers.filter(h => {
            return h.name.includes(newValue) || h.country.includes(newValue)
                || h.language.includes(newValue);
        });
        setFilteredUsers(modifiedusers);
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
                    setFilteredUsers(user);
                else
                    h(newValue);


            }}
            onChange={(e: any, newValue: any) => {
                if (newValue == "") {
                    setFilteredUsers(user);
                }
                else
                    h(newValue);
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



        {<CustomTable headCells={headCells} rows={filteredUsers}
        // editRow={(data: any) => editRow(data)}
        />}

    </div>

}
