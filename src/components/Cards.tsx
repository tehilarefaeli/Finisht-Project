import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { Country } from '../interfaces/Country.interface';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



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
    let i = 0;
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log(props.flag);
    return (
        <Card className={classes.root} id={props.id} >
            <CardHeader
                avatar={
                    props.isFavorite ? <IconButton aria-label="recipe"
                        className={classes.avatar}

                    >

                        <FavoriteIcon />
                    </IconButton> :
                        <IconButton aria-label="recipe" className={classes.avatar}>
                            <FavoriteBorderIcon />
                        </IconButton>
                }

                title={<h3>{props.name}</h3>}
            />
            <CardMedia
                className={classes.media}
                image={props.flag}

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