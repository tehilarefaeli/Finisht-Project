import React, { useState, useEffect } from 'react'
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { SiteInterface } from '../interfaces/Site.interface';
import { useParams } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ldsh from 'lodash';
export default function Site() {

    var rows: SiteInterface[] = [];
    const { serviceId, country } = useParams();
    const [site, setSite] = useState<any[]>([])
    const [filteredSite, setFilteredSite] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setSite(res);
            setFilteredSite(res);
        }
        ).catch(e => console.log(e))
    }, []);

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'typeOfActivity', label: 'Type Of Activity', },
        { id: 'age', label: 'Age', },
    ];


    const getOptions = () => {
        return ldsh.union(filteredSite.map((site) => site.address),
            filteredSite.map((site) => site.phone),
            filteredSite.map((site) => site.city),
            filteredSite.map((site) => site.name),
            filteredSite.map((site) => site.typeOfActivity),
            filteredSite.map((site) => site.age))
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
                    setFilteredSite(site);
                else {
                    const modifiedSite = filteredSite.filter(h => {
                        return h.address.includes(newValue) || h.phone.includes(newValue)
                            || h.city.includes(newValue) || h.name.includes(newValue)
                            || h.typeOfActivity.includes(newValue) || h.age.includes(newValue);
                    });
                    setFilteredSite(modifiedSite);
                }
            }}
            onChange={(e: any, newValue: any) => {
                if (newValue == "") {
                    setFilteredSite(site);
                }
                else {
                    const modifiedSite = filteredSite.filter(h => {

                        return h.address.includes(newValue) || h.phone.includes(newValue)
                            || h.city.includes(newValue) || h.name.includes(newValue)
                            || h.typeOfActivity.includes(newValue) || h.age.includes(newValue);
                    });
                    setFilteredSite(modifiedSite);
                }
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
        {<CustomTable headCells={headCells} rows={filteredSite} />}
    </div>
}

