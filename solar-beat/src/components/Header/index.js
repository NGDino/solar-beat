import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button,IconButton, Drawer, List, ListItem, ListItemText} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

//menu


//solarbeat logo
import Logo from '../../assets/solarbeat.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 350,
    },
    fullList: {
        width: 'auto',
    },

    
}));



export default function Header() {
    const classes = useStyles();

    const [open, setOpen] = useState(false)
    
    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>

                <IconButton
                    edge="start" 
                    className={classes.menuButton} 
                    color="inherit" 
                    onClick={handleDrawerOpen}
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                
                <div className={classes.title}>
                    <img className="headLogo" src={Logo}/>
                </div>
                <Button 
                    id="callToAction" 
                    color="secondary"
                    variant= "outlined"
                >
                    Savings Calculator
                </Button>
            </Toolbar>
        </AppBar>

        <Drawer anchor= 'left' open={open} onClose={handleDrawerClose}>
            <List>
                {['Home', 'Equipment', 'Solar Estimate', 'Contact Us'].map((text) => (
                    <ListItem
                        button key={text}
                        onClick={handleDrawerClose}
                        >
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
            
        </div>
    );
}