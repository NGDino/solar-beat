import React from 'react'
import EstimateForm from '../../components/EstimateForm';
import {Box, Grid} from '@material-ui/core'



const Calculator = () =>{
    return(
        <Box bgcolor='secondary.light'>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="flex-start"
            style={{ minHeight: '55vh' }}
            >
                <Grid item xs={10}>
                    <EstimateForm />
                </Grid> 
            </Grid>
    </Box>
    )
}
export default Calculator;