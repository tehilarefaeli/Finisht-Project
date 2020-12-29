import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PublicIcon from '@material-ui/icons/Public';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 800,
        marginLeft: 400,
    },
});

export default function MyAccount() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<PersonPinIcon />} label="PROFILE" />
                <Tab icon={<VpnKeyIcon />} label="CHANGE PASS" />
                <Tab icon={<PublicIcon />} label="MY COUNTRIES" />
                <Tab icon={<DirectionsWalkIcon />} label="MY TOURS" />
                <Tab icon={<SlideshowIcon />} label="LAST VIEWED" />
            </Tabs>
        </Paper>
    );
}



    // const [user, setUser] = useState<any>([])
    // useEffect(() => {

    //     const stringData = localStorage.getItem('user');
    //     if (stringData) {
    //         //   const data = JSON.parse(stringData);     ///!!!!!!!לטפל בפונקציה של השרת
    //         const data = {
    //             id: 1, email: 'dsgf@sdg.fg',
    //             firstName: 'rachel',
    //             lastName: 'gold',
    //             password: '12346'
    //         }
    //         setUser(data);
    //         console.log(user);

    //     }
    // }, []);


    // return (

    //     <div>

    //         <h1>MyAccount</h1>
    //         <h2>Hello to {user.id}</h2>

    //     </div>




