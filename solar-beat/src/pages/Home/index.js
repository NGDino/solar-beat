import React from 'react';
import {CssBaseline, Typography, Grid, Card, CardActionArea, CardContent, Box } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"
import solarPanels from '../../assets/images/solarPanel.png';
import calculator from '../../assets/images/Calculator.png';
import battery from '../../assets/images/Battery.png'
import ecohouse from '../../assets/images/eco-house.png'
import Hero from '../../assets/images/solarhouse.jpg';

const useStyles = makeStyles({
    root:{
        boxSizing: 'border-box'
    },
    hero : {
        backgroundImage: `url(${Hero})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '45vh',
        padding: '20 px',
        marginBottom: '20px'
        
    },
    
    bannerText: {
        backgroundColor: '#d3d3d3CC',
        padding: '10px',
        margin:'2em',

    },
    iconStyle: {
        fontSize: '85px',
        marginTop: '20px'
    },
    cardContainer: {
        padding: '8px',
    },
    cardStyle : {
        height: '45vh'
    }

    
})

const Home= () =>{

    const classes = useStyles()

    return(
        <React.Fragment>
            {/* <CssBaseline /> */}
            {/* <Box component="div" > */}
                <Grid 
                container 
                spacing={0} 
                justify='center'
                align='center'
                direction='column'
                className={classes.hero}>
                    
                    <Grid item xs={12} sm={6} md={4} >
                        <Box component='div' boxShadow={3} className={classes.bannerText}>
                            <Typography variant='h4' gutterBottom>
                                Check Your Solar Pulse with SolarBeat
                            </Typography>
                            <Typography variant="subtitle1"   gutterBottom>
                                Solar doesn't work for everyone. Use our free tool to check your homes solar fitness without the sales pitch or giving out your personal information.  
                            </Typography>
                        </Box>
                        
                    </Grid>

                </Grid>
            {/* </Box> */}
            <Grid container spacing={3} className={classes.cardContainer} align='center' justify='center' direction='row'>
                <Grid item item xs={12} sm={6} md={3} >
                    <Card className={classes.cardStyle}>
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

                <Grid item xs={12} sm={6} md={3} >
                    <Card className={classes.cardStyle}>
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

                <Grid item xs={12} sm={6} md={3}>
                    <Card className={classes.cardStyle}>
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
