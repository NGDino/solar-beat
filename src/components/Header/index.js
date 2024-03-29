import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button,IconButton, Drawer, List, ListItem, ListItemText} from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';

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
        width: 250,
        
    },
    fullList: {
        width: '100%',
    },
    listText:{
        fontSize: '1.2em'
    },
    logo: {
        height: "80px",
        
    }

    
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

    const menuList = [
        {
            name: "Home",
            location: "/",
            action: RouterLink
        },
        {
            name: "Equipment",
            location: "/equipment",
            action: RouterLink
        },
        {
            name: "Solar Estimate",
            location: "/estimate",
            action: RouterLink
        },
        {
            name: "Contact Us",
            location: "/contact",
            action: RouterLink
        },
    ]
    

    return (
        <div className={classes.title} >
            <AppBar position="sticky">
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
                        <RouterLink to="/"><img className= {classes.logo} alt="SolarBeat Logo"src={Logo}/></RouterLink> 
                    </div>
                    <Button 
                        id="callToAction" 
                        color="secondary"
                        variant= "outlined"
                        component = {RouterLink} to = '/estimate'
                    >
                        Solar Pulse
                    </Button>
                </Toolbar>
            </AppBar>

            <Drawer anchor= 'left' open={open} onClose={handleDrawerClose}>
                <div className={classes.list}>
                    <List>
                        {menuList.map((list) => (
                            <ListItem
                                button key={list.name}
                                onClick={handleDrawerClose}
                                component = {list.action} to = {list.location}
                                
                                >
                            <ListItemText primary={list.name} />
                            </ListItem>
                        ))}
                    </List>
                </div>
                
            </Drawer>
            
        </div>
    );
}