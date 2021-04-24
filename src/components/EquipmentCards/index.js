import React from 'react';
import {Container, Typography, Grid, Box, Card, CardContent, CardMedia, List, ListItem, ListItemIcon} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

import EcoIcon from '@material-ui/icons/Eco'
import Panels from '../../assets/images/rec-panels.jpg';
import Inverter from '../../assets/images/inverters.png';
import Batteries from '../../assets/images/batteries.png';
import Mounts from '../../assets/images/ground-vs-roof.jpg';

const useStyles= makeStyles((theme) => ({
    cardContainer: {
        [theme.breakpoints.up('sm')]: {
            // styles
            marginTop:'3em'
        }
        
        // height:600
    },
    img:{
        overflow: 'hidden',
        objectFit: 'contain'
        
    },
    cardImage:{
        borderRadius: 10
    },
    card: {
        boxShadow: '0 5px 5px 4px',
        border: '5px solid grey',
        borderRadius: 26,
    },
    wrapper: {
        paddingBottom: '5rem'
    },
    bannerText: {
        backgroundColor: '#d3d3d3CC',
        margin:'1em',
        padding: '4em 1em 4em 1em',
        boxShadow: '0 5px 5px 4px'
    }
}))

const EquipmentCards = () => {
    const classes = useStyles();
    return(
        <Container className={classes.wrapper}>
                <Grid container justify='center' spacing={3}>
                <Grid item xs={12}  >
                        <Box component='div' boxShadow={3} border={4} borderRadius={26} borderColor="grey.700" className={classes.bannerText}>
                            <Typography variant='h4' component='h2'>
                                Compare Options and Choose
                            </Typography>
                            <Typography variant='subtitle2' >
                                At SolarBeat we understand there are many options out there for solar.  We partnered with many top rated local installers with tons of options for top rated equipment. Giving you the freedom to choose what works nest for your home and budget.  Don't get sold on whatever a salesman from one company is offering. Compare options and pick the perfect solution for your home.
                            </Typography>
                        </Box>
                        
                    </Grid>
                    <Grid container  justify='space-evenly' direction='row' >
                        <Grid item xs={12} md={5} component={Card} className={classes.card}>
                                <CardMedia 
                                className={classes.cardImage}
                                component="img"
                                alt="Different Solar Panels"
                                height="350"
                                image={Panels}
                                title="Different Solar Panels"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Top of the Line Panels
                                </Typography>
                                <Typography variant="body2" color="textSecondary" >
                                    Compare top of line panels including high efficiancy panels from industry leaders such as:
                                </Typography>
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
                                </List>
                                
                            </CardContent>
                        </Grid>
                    <Grid item xs={12} md={5} component={Card} className={classes.card}>
                        <CardMedia className= {classes.img}
                        component="img"
                        alt="LG Chem and Sonnen Battery options"
                        height="350"
                        image={Batteries}
                        title="LG Chem and Sonnen Battery options"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Battery Backups
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Explore battery backup options to keep your home running during outages. Batteries can also increase savings by avoiding your utility companies non-bypassable charges when you pull from the grid, and also may have seperate rebates.  Compare many different battery sizes from top industry brands to find a perfect match!
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid container className={classes.cardContainer}  justify='space-evenly' direction='row' >
                    <Grid item xs={12} md={5} component={Card} className={classes.card}>
                        <CardMedia
                        component="img"
                        alt="String or Micro Inverter"
                        height="350"
                        image={Inverter}
                        title="String or Micro Inverter"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                The Right Inverter for the Job
                            </Typography>
                            <Typography variant="body2" color="textSecondary" >
                                Inverters convert the energy generated from the solar panels to useable power for your home.  In some cases  a single string inverter is more efficient, and sometimes microinverter is necessary for every panel.  Our experts take this into account for every job and make sure we get the right equipment for your 
                                home to make sure you have the most efficient system possible!
                            </Typography>
                        </CardContent>

                    </Grid>


                    <Grid item xs={12} md={5} component={Card} className={classes.card}>
                            <CardMedia className= {classes.img}
                            component="img"
                            alt="Roof or Ground Mounting Options"
                            height="350"
                            image={Mounts}
                            title="Roof or Ground Mounting Options"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    We'll Get Panels Anywhere
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Has another company told you they cant use your roof?  Our partners specialize in all roof types: flat, metal, or too steep? No problem! Want a ground mount or shade structure? Our partners do those too! Give us a call and have us take a look.
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>

                    
                </Grid>
            </Container>
    )
}

export default EquipmentCards;