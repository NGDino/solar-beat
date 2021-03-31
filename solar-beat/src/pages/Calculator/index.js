import React from 'react'
import EstimateForm from '../../components/EstimateForm';
import {Box, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles  = makeStyles((theme) => ({
    container: {
        minHeight: '90vh'
    }
}));

const Calculator = () =>{
    const classes = useStyles()
    return(
        <Box bgcolor='secondary.light' >
        <Grid
            
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="flex-start"
            style={{ minHeight: '55vh' }}
            >
                <Grid item xs={10} className={classes.container}>
                    <EstimateForm />
                </Grid> 
            </Grid>
    </Box>
    )
}
export default Calculator;