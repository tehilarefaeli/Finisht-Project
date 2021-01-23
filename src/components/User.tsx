import React, { useState, useEffect } from 'react'
import { HeadCell } from '../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { UserInterface } from '../interfaces/User.intarface';
import { useParams } from 'react-router-dom';
import BaseRequest from '../helpers/BaseRequest';

export default function User() {
    var rows: UserInterface[] = [];
    //const { serviceId, country, id } = useParams();
    const [ user , setUser] = useState<any[]>([])
    const [filteredUsers, setFilteredUsers] = useState<any[]>([])

 

 useEffect(() => {
//     // console.log("params: ", serviceId, country)
//     // BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
//     //     console.log("useEffect", res);
//         setHotel(res);
//         setFilteredHotels(res);
//     }
//     ).catch(e => console.log(e))
// }, []);

    const headCells: HeadCell[] = [
        { id: 'userName', label: ' User Name', },
        { id: 'country', label: 'Country', },
        { id: 'language', label: 'Language', },
        { id: 'email', label: ' Email', },
        { id: 'password', label: 'Password ', },
        { id: 'permission', label: 'Permission', },
    ];


    const getOptions = () => {
        return ldsh.union(filteredHotels.map((hotel) => hotel.name),
            filteredHotels.map((hotel) => hotel.address),
            filteredHotels.map((hotel) => hotel.city),
            filteredHotels.map((hotel) => hotel.manager))
    }
    const h =(newValue:any)=>{
        const modifiedHotels = filteredHotels.filter(h => {
            return h.name.includes(newValue) || h.city.includes(newValue)
                || h.address.includes(newValue) || h.manager.includes(newValue);
        });
        setFilteredHotels(modifiedHotels);
    }
    {<CustomTable headCells={headCells} rows={filteredUsers} 
    // editRow={(data: any) => editRow(data)}
     />}


}

/**


export default function Hotel() {
    
   

    const editRow = (row: HotelInterface) => {
        console.log("rows :", row)
        BaseRequestPut(`hotels/editHotel/${row.id}`, { ...row }).then(res => {
            console.log(res)
        })
    }
    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'manager', label: 'Manager', },
        { id: 'stars', label: 'Stars', },

    ];
   

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
                    setFilteredHotels(hotel);
                else 
                    h(newValue);
                    
                
            }}
            onChange={(e: any, newValue: any) => {
                if (newValue == "") {
                    setFilteredHotels(hotel);
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

        {/* permission={1} managerCells={managerCells} */}

    </div>
} */