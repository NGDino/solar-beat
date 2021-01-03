import React from 'react';
import {CssBaseline, Typography, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button} from '@material-ui/core'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import BuildIcon from '@material-ui/icons/Build';
import {makeStyles} from "@material-ui/core/styles"
import solarPanels from '../../assets/images/solarPanel.png';
import calculator from '../../assets/images/Calculator.png';
import battery from '../../assets/images/Battery.png'
import ecohouse from '../../assets/images/eco-house.png'

const useStyles = makeStyles({
    iconStyle: {
        fontSize: '85px',
        marginTop: '20px'
    }
    
})

const Home= () =>{

    const classes = useStyles()

    return(
        <React.Fragment>
            <CssBaseline />
            {/* <Box component="div" > */}
                <Grid container spacing={3} style={{ backgroundColor: '#eee',  }}>
                    <Grid item xs={12} sm={6}>
                        <img src={solarPanels} alt ={''}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" gutterBottom>
                            Check Your Solar Pulse with SolarBeat
                        </Typography>
                        <Typography variant="subtitle1"   gutterBottom>
                            Solar doesn't work for everyone. Use our free tool to check your homes solar fitness without the sales pitch or giving out your personal information.  
                        </Typography> 
                    </Grid>

                </Grid>
            {/* </Box> */}
            <Grid container spacing={3} style={{ backgroundColor: '#fff',  }}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea>
                            <img src={calculator} alt='calculator illustration'/>
                            <CardContent>
                                <Typography gutterBottom varient='h5' component="h2">
                                    Calculate Potential Savings
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Quickly see an approximate system size, how much your tax incentive could be, and how much you could be saving per month.  Only provide your contact info if you like what you see and want more info!
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea>
                            <img src={battery} alt='green battery illustration'/>
                            <CardContent>
                                <Typography gutterBottom varient='h4' component="h4">
                                    Compare and Save
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Like what you see?  Get a personalized system designed and our solar experts can help you choose from a selection of top brands installed by top rated local installers. Choose a finance plan that works for you, including many $0 down options.  
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardActionArea>
                            <img src={ecohouse} alt='Green Energy House'/>
                            <CardContent>
                                <Typography gutterBottom varient='h4' component="h4">
                                    Own Your Power
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Once you find the perfect solution for your home, start saving right away. We take care of designing , permitting, and installation all typically under 30 days start to finish!
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>

            
        </React.Fragment>
        

    )
    }
    export default Home
