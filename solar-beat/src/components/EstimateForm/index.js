import { Typography,  TextField, FormControl, Select, MenuItem, InputLabel, Slider, Button, Box, Paper } from '@material-ui/core'
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
        Link as RouterLink
    } from 'react-router-dom'


//styles
const useStyles = makeStyles((theme) => ({
    formContainer: {
        boxShadow: '0 5px 5px 4px',
        border: '5px solid grey',
        borderRadius: 26,
        margin: '2em',
        padding: '2em'
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 250,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        // display: 'block'
    }
}));

//value text for the slider 
// function valuetext(value) {
//     return `${value}`;
// }

const EstimateForm = () => {
    useEffect(() => {
        localStorage.setItem('customer-data', JSON.stringify(formState))
    })
//labels for slider
// console.log('does this owrk')
    const marks = [
        {
            value: 0,
            label: '$0',
        },
        {
            value: 50,
            label: '$50',
        },
        {
            value: 100,
            label: '$100',
        },
        {
            value: 150,
            label: '$150',
        },
        {
            value: 200,
            label: '$200',
        },
        {
            value: 250,
            label: '$250',
        },
        {
            value: 300,
            label: '$300',
        },
        {
            value: 400,
            label: '$400+',
        }
    ];

    const classes = useStyles();


    const [formState, setFormState] = useState({name: '', email:'', residence:'', utilityCompany: '', billAmount: 0, roofType:'' })

    //set form state
    const handleChange=(event)=>{
        
        const {name ,value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
        // console.log(formState)
        
    }



    //handle submit
    const handleSolarCalc= (e) =>{
        e.preventDefault()

        // console.log('formstate', formState)
    }

    //slider val
    const [val, setVal] = useState(0)
    const sliderValue = (event, value) => {
        setVal(value)
        // console.log('sliderval', value)
        setFormState({
            ...formState,
            billAmount: val
        })
    }


    return(
        <Box>
            <Paper elevation = {3} className={classes.formContainer} >

                <Typography variant={'h3'}>How Much Can I Save With Solar?</Typography>
                <Typography varieant = {'p'}>There are many factors that go into how much each indivudual saves with solar and unfortunately solar doesn't work for every home.  The only way to know exactly what solar will look like is with a personalized quote.  This tool gives a simple snapshot of potential savings and tax incentives based on your location and bil amount!</Typography>
                <form onSubmit={handleSolarCalc}>
                    <TextField className={classes.formControl} id="name" name="name" label="Name" variant="filled" onChange={handleChange}>
                    </TextField>
                    <TextField className={classes.formControl} id="email" name="email" label="Email" variant="filled" onChange={handleChange}>
                    </TextField>
                    
                    <FormControl className={classes.formControl} variant="filled">
                        <InputLabel id="state-label">State of Residence</InputLabel>
                        <Select
                            labelId="state-label"
                            id='state'
                            name="residence"
                            value= {formState.residence}
                            onChange={handleChange}
                        >
                            <MenuItem value={""}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'ca'}>CA</MenuItem>
                            <MenuItem value={'nv'}>NV</MenuItem>
                            {/* <MenuItem value={30}>Thirty</MenuItem> */}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} variant="filled">
                    <InputLabel id="utility-company-label">Utility Company</InputLabel>

                        <Select
                            labelId="utility-company-label"
                            name="utilityCompany"
                            value= {formState.utilityCompany}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'pge'}>PG&E</MenuItem>
                            <MenuItem value={'sdge'}>SDG&E</MenuItem>
                            <MenuItem value={'edison'}>SCE</MenuItem>
                            <MenuItem value={'nevada'}>NV Energy</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography id="discrete-slider" gutterBottom>
                        Average Bill
                    </Typography>
                    <Slider
                        defaultValue={125}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks={marks}
                        min={0}
                        max={400}
                        name="billAmount"
                        onChange={sliderValue}
                        // onChange={}
                        // onChangeCommitted={handleChange}
                    />
                    <FormControl className={classes.formControl} variant="filled">
                    <InputLabel id="roofType-label">Roof Type</InputLabel>
                        <Select
                            labelId="roofType-label"
                            name="roofType"
                            value={formState.roofType}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'composite'}>Composite</MenuItem>
                            <MenuItem value={'cementTile'}>Cement Tyle</MenuItem>
                            <MenuItem value={'metal'}>Metal</MenuItem>
                            <MenuItem value={'flat'}>Flat</MenuItem>
                            <MenuItem value={'terracotta'}>Terracotta</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                    <Button variant="contained" color="primary" type='submit' component = {RouterLink} to = '/results' children={formState}>
                        Solar Pulse Check
                    </Button>

                </form>
            </Paper>
        </Box>
        
    )
};

export default EstimateForm;