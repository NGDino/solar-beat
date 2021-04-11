import React from 'react';
import {Box, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    
    text:{
        padding: '1em'
        
    }
})

const Footer = () => {
    const classes = useStyles()

    return (
        <Box height={60} bgcolor='primary.main'>
            {/* <BottomNavigation > */}
                <Typography className ={classes.text}>
                    Created by Neil
                </Typography>
            {/* </BottomNavigation> */}
        </Box>
    )
}
export default Footer;