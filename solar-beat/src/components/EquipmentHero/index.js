import React from 'react';
import {Typography, Grid, Box} from '@material-ui/core'

import Hero from '../../assets/images/solarhouse.jpg';

import {makeStyles} from '@material-ui/core/styles';

const useStyles= makeStyles
({
    hero : {
        backgroundImage: `url(${Hero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '85vh',
        padding: '20 px',
        marginBottom: '20px',
    },

    bannerText: {
        backgroundColor: '#d3d3d3CC',
        margin:'1em',
        padding: '1em 1em 1em 1em',
        boxShadow: '0 5px 5px 4px'
    }
}); 


const EquipmentHero = () => {
    const classes = useStyles();


    return(
        <Box bgcolor="secondary.light">
            <Grid 
                container 
                spacing={0} 
                justify='center'
                direction='column'
                className={classes.hero}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box component='div' boxShadow={3} border={4} borderRadius={26} borderColor="grey.700" className={classes.bannerText}>
                            <Typography variant='h4' component='h2'>
                                Compare Options and Choose
                            </Typography>
                            <Typography variant='p' component='p'>
                                At SolarBeat we understand there are many options out there for solar.  We partnered with top rated local installers that carry the best equipment brands in the 
                                industry to give you the freedom to choose what works for your home and budget.  Don't get sold on what a salesman is offering pick the perfect solution for your 
                                solar journey.
                            </Typography>
                        </Box>
                        
                    </Grid>
            </Grid>
        </Box>
    )
    
}
export default EquipmentHero;