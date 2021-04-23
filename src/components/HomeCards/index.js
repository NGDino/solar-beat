import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Box } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import solarPanels from '../../assets/images/solarPanel.png';
import calculator from '../../assets/images/Calculator.png';
import ecohouse from '../../assets/images/eco-house.png'

const HomeCards = () => {
    

    const useStyles = makeStyles({
        root:{
            boxSizing: 'border-box',
            
        },
        iconStyle: {
            fontSize: '85px',
            marginTop: '20px'
        },
        cardContainer: {
            padding: '1em .5em 25px .5em',
        }, media: {
            height: '50',
            marginBottom: '0', // 16:9
        },
        cardStyle : {
            minHeight: '68vh',
            padding: '1em',
            paddingBottom: '2em',
            boxShadow: '0 5px 5px 4px',
            border: '5px solid grey',
            borderRadius: 26,
            
        }
    })

    const classes = useStyles()
    return(
        <Box bgcolor='secondary.light'>
                <Grid container spacing={3} className={classes.cardContainer} align='center' justify='center' direction='row' >
                    <Grid item xs={12} sm={6}  lg={3} >
                        <Card className={classes.cardStyle}>
                            <div >
                            <CardMedia
                                className={classes.media}
                                
                                title="Calculator Illustration"><img src={calculator} alt='calculator illustration'/>
                            </CardMedia>
                            
                                {/* <img src={calculator} alt='calculator illustration'/> */}
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Calculate Potential Savings
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" >
                                        Quickly see an approximate system size, how much your tax incentive could be, and how much you could be saving per month.  Only provide your contact info if you like what you see and want more info!
                                    </Typography>
                                </CardContent>

                            </div>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3} >
                        <Card className={classes.cardStyle}>
                            <div>
                            <CardMedia
                                className={classes.media}
                                
                                title="Calculator Illustration"><img src={solarPanels} alt='green battery illustration'/>
                            </CardMedia>
                                
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Compare and Save
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" >
                                        Like what you see?  Get a personalized system designed and our solar experts can help you choose from a selection of top brands installed by top rated local installers. Choose a finance plan that works for you, including many $0 down options.  
                                    </Typography>
                                </CardContent>

                            </div>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3} >
                        <Card className={classes.cardStyle}>
                            <div>
                            <CardMedia
                                className={classes.media}
                                
                                title="Calculator Illustration"><img src={ecohouse} alt='Green Energy House'/>
                            </CardMedia>
                                
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Own Your Power
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Once you find the perfect solution for your home, start saving right away. We take care of designing , permitting, and installation all typically under 30 days start to finish!
                                    </Typography>
                                </CardContent>

                            </div>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
    )
}

export default HomeCards;