import React, { useState, useEffect } from 'react'
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { TourInterface } from '../interfaces/Tour.interface';
import { useParams } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import BaseRequest from '../helpers/BaseRequest';
import ldsh from 'lodash';

export default function Tour() {
    var rows: TourInterface[] = [];
    const { serviceId, country } = useParams();
    const [tour, setTourt] = useState<any[]>([])
    const [filteredTour, setFilteredTour] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setTourt(res);
            setFilteredTour(res);

        }
        ).catch(e => console.log(e))
    }, []);

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'city', label: 'City', },
        { id: 'guide', label: ' Guide', },
        { id: 'phoneGuide', label: 'Phone Guide', },
        { id: 'placeOfDeparture', label: 'Place Of Departure', },
        { id: 'duration', label: 'Duration', },
        { id: 'level', label: 'Level', },
        { id: 'age', label: 'Age', },
        { id: 'duscription', label: 'Duscription' },
    ];

    const getOptions = () => {
        return ldsh.union(filteredTour.map((tour) => tour.name),
            filteredTour.map((tour) => tour.address),
            filteredTour.map((tour) => tour.city),
            filteredTour.map((tour) => tour.guide),
            // filteredTour.map((tour) => tour.phoneGuide),
            filteredTour.map((tour) => tour.placeOfDeparture),
            filteredTour.map((tour) => tour.duration),
            filteredTour.map((tour) => tour.level))
        // filteredTour.map((tour) => tour.age))
        // filteredTour.map((tour) => tour.description))
    }

    return <div>

        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={getOptions()}
            onKeyUp={(e: any) => {
                const newValue = e.target.value;
                if (newValue == "")
                    setFilteredTour(tour);
                else {
                    const modifiedTour = filteredTour.filter(h => {
                        return h.name.includes(newValue) || h.address.includes(newValue)
                            || h.city.includes(newValue)
                            || h.guide.includes(newValue)
                            //|| h.phoneGuide.includes(newValue) 
                            || h.placeOfDeparture.includes(newValue)
                            || h.duration.includes(newValue) || h.level.includes(newValue);
                        // || h.age.includes(newValue);// || h.duscription.includes(newValue);
                    });
                    setFilteredTour(modifiedTour);
                }
            }}
            onChange={(e: any, newValue: any) => {
                if (newValue == "") {
                    setFilteredTour(tour);
                }
                else {
                    const modifiedTour = filteredTour.filter(h => {
                        return h.name.includes(newValue) || h.address.includes(newValue)
                            || h.city.includes(newValue)
                            || h.guide.includes(newValue)
                            //|| h.phoneGuide.includes(newValue) 
                            || h.placeOfDeparture.includes(newValue)
                            || h.duration.includes(newValue) || h.level.includes(newValue);
                        // || h.age.includes(newValue);// || h.duscription.includes(newValue);
                    });
                    setFilteredTour(modifiedTour);
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
        <CustomTable headCells={headCells} rows={filteredTour} />
    </div>
}





