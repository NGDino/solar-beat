import React, {useState} from 'react';
import {Container, Typography, Grid, Box, Card, CardContent, CardMedia, List, ListItem, ListItemIcon} from '@material-ui/core'
import { shadows } from '@material-ui/system';
import {makeStyles} from '@material-ui/core/styles'
import EcoIcon from '@material-ui/icons/Eco'

import Hero from '../../assets/images/solarhouse.jpg';
import Panels from '../../assets/images/rec-panels.jpg';
import Inverter from '../../assets/images/inverters.png';
import Batteries from '../../assets/images/batteries.png';
import Mounts from '../../assets/images/ground-vs-roof.jpg';

//style to make Paper opacity, centered border

const useStyles= makeStyles
({
    hero : {
        backgroundImage: `url(${Hero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '85vh',
        padding: '20 px',
        marginBottom: '20px'
        
    },
    
    bannerText: {
        backgroundColor: '#d3d3d3CC',
        margin:'1em',
        padding: '1em 1em 1em 1em',

    },
    container2: {
        height:600
    },
    img:{
        overflow: 'hidden',
        objectFit: 'contain'
    },
    card: {
        height: 700,
        boxShadow: 3,
        border: '5px solid grey',
        borderRadius: 26,
    }
})

const Contact = () =>{
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
                
                
            
            <Container className=''>
            <Grid container spacing={4} >
                
                <Grid item xs={12} md={5}  >
                <Box >
                <Card className={classes.card} borderRadius={26} >
                        {/* <CardActionArea> */}
                            <CardMedia
                            borderRadius={26} 
                            component="img"
                            alt="Different Solar Panels"
                            height="400"
                            image={Panels}
                            title="Different Solar Panels"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Top of the Line Panels
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Compare top of line panels including high efficiancy panels from industry leaders such as:
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EcoIcon />
                                            </ListItemIcon>
                                            REC
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EcoIcon />
                                            </ListItemIcon>
                                            SunPower
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EcoIcon />
                                            </ListItemIcon>
                                            LG
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EcoIcon />
                                            </ListItemIcon>
                                            Panasonic
                                        </ListItem>
                                    </List>
                                </Typography>
                            </CardContent>
                        {/* </CardActionArea> */}

                    </Card>

                </Box>
                    
                
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card className={classes.card}>
                            <CardMedia
                            component="img"
                            alt="String or Micro Inverter"
                            height="400"
                            image={Inverter}
                            title="String or Micro Inverter"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Right Inverter for the Job
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Inverters are what converts the energy generated from the solar panels to useable power for your home.  Sometimes a single string inverter works better,
                                    and sometimes a job needs a microinverter for every panel.  Our experts take this into account for every job and make sure we get the right equipment for your 
                                    home to make sure you have the most efficient system possible!
                                </Typography>
                            </CardContent>

                    </Card>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Card className={classes.card}>
                            <CardMedia className= {classes.img}
                            component="img"
                            alt="LG Chem and Sonnen Battery options"
                            height="400"
                            image={Batteries}
                            title="LG Chem and Sonnen Battery options"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Battery Backups
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Explore battery backups to not only make insure your power stays on during backups, but also to protect your from non-bypassable charges from 
                                    your energy company.  Many different sizes and Options from top manufactures to match your needs.
                                </Typography>
                            </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card className={classes.card}>
                            <CardMedia className= {classes.img}
                            component="img"
                            alt="Roof or Ground Mounting Options"
                            height="400"
                            image={Mounts}
                            title="Roof or Ground Mounting Options"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    We'll Get Panels Anywhere
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Has another company told you they cant use your roof?  Our partners specialize in all roof types, flat, metal, or too steep no problem! Want a ground mount or a 
                                    shade structure? Our partners do those too! Give us a call and have us take a look.
                                </Typography>
                            </CardContent>

                    </Card>
                </Grid>
                
            </Grid>
            </Container>
            
        </Box>
        

    )
}
export default Contact;