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
import { useHistory } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

// const [fields, setFields] = useState<any[]>([
//     {firstName:false,lastName:false,email:false,password:false,verifyPassword:false}
// ]);
//const checkValidation=(e:any,field:any)=>{
//    var arr=[...fields]
//  var check=arr[field]?true:false;
//}

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
        email: '',
        firstName: '',
        password: '',
        repeatPassword: '',
    })
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const toSingIn = (e: any) => {
        history.push(`/signin`)
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
        setSubmitted(true);
    }

    const classes = useStyles();
    return (
        <ValidatorForm
            ref={formRef}
            onSubmit={handleSubmit}
        >
            <h2>Simple form</h2>

            <TextValidator
                label="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
            />
            <br />
            <TextValidator
                label="FirstName"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                validators={['required']}
                errorMessages={['this field is required']}
            />
            <br />
            <TextValidator
                label="Password"
                onChange={handleChange}
                name="password"
                type="password"
                validators={['required']}
                errorMessages={['this field is required']}
                value={formData.password}
            />
            <br />
            <TextValidator
                label="Repeat password"
                onChange={handleChange}
                name="repeatPassword"
                type="password"
                validators={['isPasswordMatch', 'required']}
                errorMessages={['password mismatch', 'this field is required']}
                value={formData.repeatPassword}
            />

            <br />
            <Button
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
        </ValidatorForm>

    );
    // <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <div className={classes.paper}>
    //         <Avatar className={classes.avatar}>

    //         </Avatar>
    //         <Typography component="h1" variant="h5">
    //             Sign up
    // </Typography>
    //         <form className={classes.form} noValidate>
    //             <Grid container spacing={2}>
    //                 <Grid item xs={12} sm={6}>
    //                     <TextField
    //                         // id="standard-error-helper-text"
    //                         //helperText="Incorrect entry."
    //                         autoComplete="fname"
    //                         name="firstName"
    //                         variant="outlined"
    //                         required
    //                         fullWidth
    //                         id="firstName"
    //                         label="First Name"
    //                         autoFocus
    //                     //onBlur={checkValidation}
    //                     // helperText= {check?''}
    //                     />
    //                 </Grid>
    //                 <Grid item xs={12} sm={6}>
    //                     <TextField
    //                         variant="outlined"
    //                         required
    //                         fullWidth
    //                         id="lastName"
    //                         label="Last Name"
    //                         name="lastName"
    //                         autoComplete="lname"
    //                     />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <TextField
    //                         variant="outlined"
    //                         required
    //                         fullWidth
    //                         id="email"
    //                         type="email"
    //                         label="Email Address"
    //                         name="email"
    //                         autoComplete="email"
    //                     />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <TextField
    //                         variant="outlined"
    //                         required
    //                         fullWidth
    //                         name="password"
    //                         label="Password"
    //                         type="password"
    //                         id="password"
    //                         autoComplete="current-password"
    //                     />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <TextField
    //                         variant="outlined"
    //                         required
    //                         fullWidth
    //                         name="verifyPassword"
    //                         label="Verify Password"
    //                         type="password"
    //                         id="verifyPassword"
    //                         autoComplete="current-password"
    //                     />
    //                 </Grid>
    //             </Grid>
    //             <Button
    //                 type="submit"
    //                 fullWidth
    //                 variant="contained"
    //                 color="primary"
    //                 className={classes.submit}
    //             >
    //                 Sign Up
    //             </Button>
    //             <Grid container justify="flex-end">
    //                 <Grid item>
    //                     <Link
    //                         onClick={toSingIn}
    //                         className="Link"
    //                     >
    //                         {"Already have an account? Sign in"}
    //                     </Link>
    //                 </Grid>
    //             </Grid>
    //         </form>
    //     </div>
    //     <Box mt={5}>
    //     </Box>
    // </Container>


}