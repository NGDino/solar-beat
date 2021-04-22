import React from 'react';
import {Box, Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';


//icons
import panels from '../../assets/images/solarPanel.png';
import taxImage from '../../assets/images/tax-incentive.png';
import monthly from '../../assets/images/monthly.png';
import totalSavings from '../../assets/images/total-savings.png';


const rates = {
    1 : 0.23, //0-100
    2 : 0.25, //101-150
    3 : 0.27, //150-200
    4 : 0.275,//201-300
    5 : 0.28, //300+
}

const sunHours= 1250;

const useStyles  = makeStyles((theme) => ({
    container: {
        minHeight: '84vh',
        marginTop: '0',
        paddingTop: '2em',
        paddingBottom: '2em'
    },
    content: {
        backgroundColor: '#d3d3d3CC',
        padding: '1em 1em 1em 1em',
        boxShadow: '0 5px 5px 4px',
        border: '5px solid grey',
        borderRadius: 26,
        maxWidth: '1020px'
    },
    icons: {
        height: '7rem'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    lineItem: {
        margin: '2em'
    },
    Button:{
        lineHeight: 5.5,
        minWidth: 300,
        borderRadius: 26,
        boxShadow: '0 5px 5px 4px',
        backgroundColor: '#006633'
    },
}));

const Snapshot= () => {

    const classes = useStyles()
    //get form data from local storage
    const data = JSON.parse(localStorage.getItem('customer-data'));

    const billPrice = data.billAmount



    function setRate(billPrice){
        if(billPrice <= 100){
            return (billPrice / rates[1]) * 12 / sunHours
        }else if(billPrice>= 101 && billPrice <=150){
            return (billPrice / rates[2]) *12 / sunHours
        }else if(billPrice>= 151 && billPrice <=200){
            return (billPrice / rates[3]) *12 / sunHours
        }else if(billPrice>= 201 && billPrice <=300){
            return ((billPrice /  rates[4]) *12) / sunHours
        }
        else {
            return ((billPrice / rates[5])*12) /sunHours
        }

    }
    const systemSize = (setRate(billPrice)).toFixed(2)
    const systemPrice = (setRate(billPrice) * 1000)*4.00


    function getTaxIncentive(total){

        let incentive = systemPrice * 0.26

        return incentive.toFixed(2)
    }

    const taxCredit = getTaxIncentive()


    const interest = .04

    const p = systemPrice

    const r = interest/12

    const t = 300
    // let usablePay = '0'

    function getPayment(p,r,t){


        const d =  (Math.pow((1+r), t) - 1 ) / (r * (Math.pow((1+r),t)))

        const payment = (p / d).toFixed(2)



        return payment


    }

    const yearlySave = ((billPrice - getPayment(p,r,t))*12).toFixed(2)




    const totalYearOne = (parseFloat(yearlySave)+ parseFloat(taxCredit)).toFixed(2)


    return(
        <Box className={classes.container} bgcolor='secondary.light' >
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                >
                    <Grid container
                        xs={11} 
                        spacing={0}
                        style={{ minHeight: '55vh' }}
                        className={classes.content}
                        alignItems="center"
                        justify="center"
                        >

                        <Grid item xs= {11}>
                                <Typography variant='h4' gutterBottom>Hey {data.name.charAt(0).toUpperCase() + data.name.slice(1)}, Great news, solar might work for you!
                                </Typography>
                                <Typography variant='body1' gutterBottom>Hey {data.name.charAt(0).toUpperCase() + data.name.slice(1)}, Great news, solar might work for you!
                                </Typography>
                        </Grid>
                        <Grid container xs={12} direction="row" alignItems="center"  justify="center" className={classes.lineItem}>
                            <Grid item xs={12} sm={2}>
                                <img src={panels} className={classes.icons} alt="solar panel icon"/>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography variant='h5' className={classes.paper}>Estimated system size to power your home {systemSize}KW</Typography>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} direction="row" alignItems="center"  justify="center" className={classes.lineItem}>
                            <Grid item xs={12} sm={2}>
                                <img src={taxImage} className={classes.icons} alt="tax incentive icon"/>
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                <Typography variant='h5' className={classes.paper}>Potential Federal Tax Incentive ${getTaxIncentive()}</Typography>
                            </Grid>
                        </Grid>                        
                        <Grid container xs={12} direction="row" alignItems="center"  justify="center" className={classes.lineItem}>
                            <Grid item xs={12} sm={2}>
                                <img src={monthly} className={classes.icons} alt="payment icon"/>
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                <Typography variant='h5' className={classes.paper}>Monthly payments as low as ${getPayment(p,r,t)}/mo </Typography>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} direction="row" alignItems="center"  justify="center" className={classes.lineItem}>
                            <Grid item xs={12} sm={2}>
                                <img src={totalSavings} className={classes.icons} alt="yearly savings"/>
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                <Typography variant='h5' className={classes.paper}>Total potential first year savings of ${totalYearOne} </Typography>
                            </Grid>
                            <Typography variant='h4' gutterBottom>
                                Like what you see?
                            </Typography>
                            <Grid item xs={12}>
                                <Button 
                                className = {classes.Button}
                                id="callToAction" 
                                color="secondary"
                                variant= "contained"
                                component = {RouterLink} to = '/contact'
                                >
                                    Get a Quote Today!
                                </Button> 
                            </Grid>
                        
                        </Grid>
                    </Grid>
                </Grid>


        </Box>

    )
}

export default Snapshot;