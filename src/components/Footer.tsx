
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ marginLeft: '30%' }}>
            <Button href="#text-buttons" color="primary">
                Terms of Use
            </Button>
            <Button href="#text-buttons" color="primary">
                Privacy Policy
            </Button>
            <Button href="#text-buttons" color="primary">
                Help
            </Button>
            <Button href="#text-buttons" color="primary">
                Contact Us
            </Button>
        </div>

    )
    }