import React from 'react';
import {Box, Typography,Link, Grid, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles({
    
    text:{
        padding: '1em'
        
    },
    links:{
        fontWeight: 'bold',
        margin: '.25em',
        fontSize: '1.5em'
    },
    linkContainer:{
        paddingTop: '5em'
    },
    Button:{
        lineHeight: 5.5,
        minWidth: 300,
        borderRadius: 26,
        boxShadow: '0 5px 5px 4px',
       
    },
    gosolar:{

    }
})

const Footer = () => {
    const classes = useStyles()

    return (
        <div>
            <Box minHeight={259} bgcolor='primary.main' >
                <Grid  container alignItems="center" justify="space-between" className= {classes.linkContainer} size="large" spacing={2}>
                    <Grid item xs={12} md={6} >
                    <Typography className ={classes.gosolar} variant='h5' gutterBottom>
                        See if solar works for you
                    </Typography>
                        <Button 
                            className = {classes.Button}
                            id="callToAction" 
                            color="secondary"
                            variant= "contained"
                            component = {RouterLink} to = '/estimate'
                        >
                            Savings Estimate
                        </Button>    
                    </Grid>
                    <Grid item xs={12} md={6}>                                  
                        <Link href="https://www.solarreviews.com/blog/what-are-the-most-efficient-solar-panels" target="_blank" color = 'textSecondary' className={classes.links} display='block' gutterBottom variant="body1">
                            Most Efficient Panels 2021
                        </Link>                
                        <Link href="https://www.costofsolar.com/is-my-home-worth-more-with-solar-energy/#" color = 'textSecondary' target="_blank" className={classes.links} display='block' gutterBottom variant="body1">
                            Solar Increases Home Value
                        </Link>                                   
                        <Link href="#" color = 'textSecondary' className={classes.links} display='block' gutterBottom variant="body1">
                            Federal Tax Credit Extended
                        </Link>                
                    </Grid>
                </Grid>              
            </Box>
            <Box height={60} bgcolor='#AEAEAE'>
                {/* <BottomNavigation > */}
                    <Typography className ={classes.text} align='right'>
                        Created by Neil
                    </Typography>
                {/* </BottomNavigation> */}
            </Box>
        </div>
        
    )
}
export default Footer;