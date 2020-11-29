
import React, { useState, useRef, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';


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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const history = useHistory();
    const [formData, setFormData] = useState<any>({

        email: '',
        password: '',

    })
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    const toSingUp = (e: any) => {
        history.push(`/signup`)
    }

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
        setSubmitted(true);
    }

    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={classes.form} noValidate>

                    <ValidatorForm
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
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
                        <br />

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

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
          </Button>
                    </ValidatorForm>
                    <Grid container>
                        < Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                onClick={toSingUp}
                                className="Link"
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>



                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>

            </Box>
        </Container>
    );
}
