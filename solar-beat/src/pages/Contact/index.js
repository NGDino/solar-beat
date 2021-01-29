import React, {useState} from 'react'
import {Box, FormControl, InputLabel, MenuItem, Select, TextField, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Contact = () =>{
    const classes = useStyles();
    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return(
        <Box>
            <h1>How can we Help you</h1>
            <form>
                <TextField className={classes.formControl} id="name" name="name" label="Name" variant="filled" >
                </TextField>
                <TextField className={classes.formControl} id="email" name="email" label="Email" variant="filled" >
                </TextField>
                <TextField className={classes.formControl} id="address" name="address" label="Address" variant="filled" >
                </TextField>
                <TextField className={classes.formControl} id="city" name="city" label="City" variant="filled" >
                </TextField>
                <TextField className={classes.formControl} id="zip" name="zip" label="Zip Code" variant="filled" >
                </TextField>
                <TextField className={classes.formControl} id="phone" name="phone" label="Phone" variant="filled" >
                </TextField>
                <TextField className={classes.formControl} id="email" name="email" label="Email" variant="filled" >
                </TextField>
                <FormControl component="fieldset">
                <FormLabel component="legend">Do You Own Your Home?</FormLabel>
                <RadioGroup aria-label="owner" name="owner1" value={value} onChange={handleChange}>
                    <FormControlLabel value="owner1" control={<Radio />} label="I own" />
                    <FormControlLabel value="rent" control={<Radio />} label="I am renting" />
                </RadioGroup>
                </FormControl>
                <br/>
                <Button variant="contained" color="primary" type='submit' >
                    Request a Quote
                </Button>

            </form>
            
        </Box>
        

        
    )
}
export default Contact;