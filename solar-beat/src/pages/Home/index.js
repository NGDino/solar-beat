import React from 'react';
import {CssBaseline, Typography, Box } from '@material-ui/core'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import BuildIcon from '@material-ui/icons/Build';
import {makeStyles} from "@material-ui/core/styles"

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
            <Box component="div" style={{ backgroundColor: '#eee', height: '45vh' }}>
                <Typography  style={{}}>
                    <Brightness5Icon className={classes.iconStyle}/>
                    <h3>Going Solar has Never Been Easier</h3>
                    <h5>Get the info you need on your time without being pressured by a salesrep. </h5>
                </Typography>
            </Box>
            <Box component="div" style={{ backgroundColor: '#fff', height: '45vh' }}>
                <Typography  style={{ }}>
                    <BuildIcon className={classes.iconStyle}/>
                    <h3>Quickly See if it's Right For You</h3>
                    <h5>Use our free estimator tool to check your solar pulse and see if it might make sense for your home. </h5>
                </Typography>
            </Box>
            <Box component="div" style={{ backgroundColor: '#eee', height: '45vh' }}>
                <Typography  style={{ }}>
                    <BuildIcon className={classes.iconStyle}/>
                    <h3>Quickly See if it's Right For You</h3>
                    <h5>Use our free estimator tool to check your solar pulse and see if it might make sense for your home. </h5>
                </Typography>
            </Box>
        </React.Fragment>
        

    )
    }
    export default Home
