import React from 'react';
import { Dispatch } from "redux";
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Country } from '../interfaces/Country.interface';
import { CountryState } from '../state/types';
//import RecipeReviewCard from './Cards';
//import React from 'react';
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
            backgroundColor: red[500],
        },
    }),
);

export default function Mycountry() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const countries: readonly Country[] = useSelector(
        (state: CountryState) => state.countries,
        shallowEqual
    )

    return (
        <div>


            {countries.map(c =>
                <div>
                    <img src={c.flag} />
                    <div>{c.isFavorite}</div>
                    <div>{c.name}</div>
                </div>

            )}
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>


                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"


                />
                {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
            </CardContent> */}
                {/* <CardActions disableSpacing> */}
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                {/* <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton> */}
                {/* </CardActions> */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    {<CardContent>



                    </CardContent>}
                </Collapse>
            </Card>


        </div>




    );
}


// }

        // {countries.map(c =>
        //     <div>
        //         <img src={c.flag} />
        //         <div>{c.isFavorite}</div>
        //         <div>{c.name}</div>
        //     </div>

        // )}
    // </div>

// }

