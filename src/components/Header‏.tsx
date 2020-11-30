import React, { useState } from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import { lightBlue } from '@material-ui/core/colors';
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuList, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        list: {
            width: 250,

        },
        listDrawer: {
            height: '94%',
            marginTop: '6%'
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        HomeIcon: {
            padding: theme.spacing(0, 200),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        /* Icon: {
            padding: theme.spacing(0, 200),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, */
    }),
);

export default function Header() {
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null);


    const toSingUp = (e: any) => {
        history.push(`/signup`)
    }
    const drawerStyle = {
        height: '94%',
        marginTop: '6%'
    };
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setMenuOpen(open)

    };

    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {/* להוסיף איקונים וניתובים כאוביקטים */}
                {['Home', 'countries', 'Tours', 'Halachic Times', 'Weather', 'About Us', 'Our Team', 'Terms', 'Help', 'Contact'].map((text, index) => (
                    <ListItem button key={text} >
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />

                    </ListItem>
                ))}
            </List>
            <Divider />
            {/* <List>
                {[{text:'ALL MAILS',link:'mails'}, 'Trash', 'Spam'].map((item, index) => (
                    <ListItem button key={item.text} onClick={()=>navigate(item.link)}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> 
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ backgroundColor: lightBlue[300] }}>
                <Toolbar>
                    <React.Fragment key={'left'}>
                        <Button
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer className={classes.listDrawer} anchor={'left'} open={menuOpen} onClose={toggleDrawer(false)} style={drawerStyle} >
                            {list()}
                        </Drawer>
                    </React.Fragment>
                    {/* <IconButton>
                        edge="start"
                        className={classes.menuButton}
                        aria-controls={drawerId}
                        color="inherit"
                        aria-label="open drawer"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography className={classes.title} variant="h6" noWrap>
                        Our Amazing Project
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="homePage" aria-haspopup="true" color="inherit" >
                            <HomeIcon />
                        </IconButton>
                        {/*<IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onMouseOver={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton> */}
                    </div>
                    {/* <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div> */}
                    <div onMouseOver={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}>
                        <Button
                            ref={anchorRef}
                            aria-label="account of current user"
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            color="inherit"

                        >
                            <AccountCircle />
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={toSingUp}>Sign In\Sign Up</MenuItem>
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My Account</MenuItem>
                                                <MenuItem onClick={handleClose}>My Countries</MenuItem>
                                                <MenuItem onClick={handleClose}>My Tours</MenuItem>
                                                <MenuItem onClick={handleClose}>Last Viewed</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                    <IconButton aria-label="Lang" aria-haspopup="true" color="inherit" >
                        <LanguageIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu}
            {renderDrawer}
            {renderMenu}  */}
        </div >
    );
}



