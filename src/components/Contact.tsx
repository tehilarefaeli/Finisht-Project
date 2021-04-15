
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import BaseRequestPost from '../helpers/BaseRequestPost ';
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function Contact() {
    const classes = useStyles();
    const [submitted, setSubmitted] = useState(false);


    const [formData, setFormData] = useState<any>({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        text: '',
        //  repeatPassword: '',
    })
    useEffect(() => {
        if (submitted)
            setTimeout(() => setSubmitted(false), 5000);
    }, [submitted]);
    // const toSend = () => {

    // }
    const handleChange = (event: any) => {
        let fd = { ...formData };
        fd[event.target.name] = event.target.value;
        setFormData(fd)
    }



    const handleSubmit = () => {
        console.log("data sent to server////", formData);

        BaseRequestPost('mail/sendUserMail', formData).then(res => {
            console.log("sign up response", res);
            if (res.success) {
                setSubmitted(true);
                const data = {
                    id: res,
                    from: formData.email,
                    subject: formData.firstName + ' ' + formData.lastName,
                    // phone: formData.phone,
                    text: formData.text
                }
                setFormData(data);
                console.log("dataaaaa", data);
                // toMyAccount(data);
                alert('הטופס נשלח בהצלחה')
            }
            else {

            }
        }
        ).catch(e => console.log(e))

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    contact
        </Typography>
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                value={formData.firstName}
                                name="firstName"
                                variant="outlined"
                                // required
                                onChange={handleChange}

                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                value={formData.lastName}
                                // required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                onChange={handleChange}

                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                // required
                                fullWidth
                                value={formData.email}
                                id="email"
                                onChange={handleChange}

                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                value={formData.phone}
                                //required
                                fullWidth
                                onChange={handleChange}

                                name="phone"
                                label="phone"
                                type="phone"
                                id="phone"
                                autoComplete="phone"
                            />
                        </Grid>
                        <Grid>
                            <TextareaAutosize

                                onChange={handleChange}

                                //value={formData.text}
                                rowsMax={7}
                                aria-label="contact us"
                                defaultValue="contact us....."
                            />

                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <br></br>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        //className={classes.submit}
                        //type="submit"

                        disabled={submitted}
                    // onClick={toSend}
                    >
                        {
                            (submitted && 'Your form is submitted!')
                            || (!submitted && 'Contact Us')
                        }
                        Contact Us
          </Button>

                </form>
            </div>
            <Box mt={5}>
            </Box>
        </Container>
    );
}
