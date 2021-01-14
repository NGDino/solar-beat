import React, {useState} from 'react'
import {Box, FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
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
    const [help, setHelp] = useState('');

    const handleChange = (event) => {
        setHelp(event.target.value);
        console.log('help', help)
    };

    return(
        <Box>
            <h1>How can we Help you</h1>
            <FormControl className={classes.formControl}>
                <InputLabel id="how-help-label">I would like...</InputLabel>
                <Select
                    labelId="how-help-label"
                    id="how-help"
                    value={help}
                    onChange={handleChange}
                    >
                        <MenuItem value={'info'}>I'd like more information</MenuItem>
                        <MenuItem value={'quote'}>Get a Quote</MenuItem>
                </Select>
            </FormControl>
        </Box>
        

        
    )
}
export default Contact;