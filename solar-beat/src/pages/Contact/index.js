import React, {useState} from 'react'
import {Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactForm from '../../components/ContactForm'

const useStyles = makeStyles({
    boxStyle: {
        height: '85vh'
    },
    container: {
        margin: '3em'
    }
})


const Contact = () =>{
    const classes = useStyles()
    return(
        <Box bgcolor='secondary.light' className= {classes.boxStyle}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="flex-start"
                style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={10} className={classes.container}>
                        <ContactForm />
                    </Grid> 
                </Grid>
        </Box>
        

        
    )
}
export default Contact;