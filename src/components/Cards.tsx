import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Logo from '../../public/logo.192.png'
import { Country } from '../interfaces/Country.interface';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {

        },
    })
);

export default function RecipeReviewCard(props: Country) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    props.isFavorite ? <div aria-label="recipe" className={classes.avatar}>
                        <FavoriteIcon />
                    </div> :
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <FavoriteBorderIcon />
                        </Avatar>
                }
                action={
                    <IconButton aria-label="settings">

                    </IconButton>
                }
                title={<h3>{props.name}</h3>}
            />
            <CardMedia
                className={classes.media}
                image='../../public/logo192.png'
            // title="Paella dish"
            />
            <CardContent>
                {/* <img src='C://Users//Tehila//Desktop//React//finistproject//public//logo512.png' /> */}
                {/* <Typography variant="body2" color="textSecondary" component="p">
                    {props.name}
                </Typography> */}
            </CardContent>

        </Card>
    );
}