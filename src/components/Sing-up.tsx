import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory, useLocation } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import BaseRequestPost from '../helpers/BaseRequestPost ';



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
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    }
}));

export default function SignUp() {

    const history = useHistory();

    const [formData, setFormData] = useState<any>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        //  repeatPassword: '',
    })
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const toSingIn = (e: any) => {
        history.push(`/signin`)
    }
    const toMyAccount = (data: any) => {
        history.push({ pathname: '/myAccount', state: { data: data } })
    }
    //useEffect(() => {
    //    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
    //        let fd = { ...formData }
    //        if (value !== fd.password) {
    //            return false;
    //        }
    //        return true;
    //    })
    //
    //    return () => {
    //        // if (ValidatorForm.hasValidationRule('isPasswordMatch')) {
    //        ValidatorForm.removeValidationRule('isPasswordMatch');
    //        // }
    //    }
    //}, [])



    useEffect(() => {
        if (submitted)
            setTimeout(() => setSubmitted(false), 5000);
    }, [submitted]);

    const handleChange = (event: any) => {
        let fd = { ...formData };
        fd[event.target.name] = event.target.value;
        setFormData(fd)
    }

    const handleSubmit = () => {
        BaseRequestPost('users/signup', formData).then(res => {
            console.log("sign up response", res);

            setSubmitted(true);
            const data = { id: res, ...formData }
            toMyAccount(data);
        }
        ).catch(e => console.log(e))

    }



    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                 </Typography>
                <ValidatorForm className={classes.form} noValidate
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                // id="standard-error-helper-text"
                                //helperText="Incorrect entry."
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={handleChange}
                                value={formData.firstName}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoFocus
                            />
                        </Grid>
                        <br />
                        <Grid item xs={12} sm={6}>
                            <TextValidator
                                autoComplete="lname"
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                onChange={handleChange}
                                value={formData.lastName}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoFocus
                            />
                        </Grid>
                        <br />

                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                autoComplete="email"
                                onChange={handleChange}
                                value={formData.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </Grid>
                        <br />

                        < Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                value={formData.password}
                            />
                        </Grid>
                        <br />


                    </Grid>

                    <br />
                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={submitted}
                    >
                        {
                            (submitted && 'Your form is submitted!')
                            || (!submitted && 'Submit')
                        }
                    </Button>
                    <br />
                </ValidatorForm>
                <br />
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link
                            onClick={toSingIn}
                            className="Link"
                        >
                            {"Already have an account? Sign in"}
                        </Link>
                    </Grid>
                </Grid>

            </div>
            <Box mt={5}>
            </Box>
        </Container>
    );
}