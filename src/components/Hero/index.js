import React from 'react';
import {Typography, Grid, Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import heroImage from '../../assets/images/solarhouse.jpg';


const useStyles = makeStyles((theme) => ({
    root:{
        boxSizing: 'border-box',
        
    },
    hero : {
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '85vh',
        padding: '20 px',
        // marginBottom: '20px'
        [theme.breakpoints.down('sm')]: {
            height: '50vh'
        },
        
    },
    
    bannerText: {
        backgroundColor: '#d3d3d3CC',
        margin:'1em',
        padding: '1em 1em 1em 1em',
        boxShadow: '0 5px 5px 4px'
        

    },
    
}));

const Hero = () => {
    const classes = useStyles()

    return(
        
        <Grid 
        container 
        spacing={0} 
        justify='center'
        alignContent='flex-start'
        direction='column'
        align='center'
        className={classes.hero}>
            
            <Grid item xs={12} sm={6} md={4} className= {classes.border}>
                <Box component='div' boxShadow={3} border={4} borderRadius={26} borderColor="grey.700" className={classes.bannerText}  align= 'center'>
                    
                    <Typography variant='h4' >
                        Check Your Solar Pulse with SolarBeat
                    </Typography>
                    <Typography variant="subtitle1">
                        Solar doesn't work for everyone. Use our free tool to check your homes solar fitness without the sales pitch or giving out your personal information.  
                    </Typography>
                </Box>
                
            </Grid>

        </Grid>
    )
}

export default Hero;