import { Typography,  TextField, FormControl, Select, MenuItem, InputLabel, Slider, Button, Box, Paper, Grid, FormHelperText, } from '@material-ui/core'
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
        useHistory
    } from 'react-router-dom'


//styles
const useStyles = makeStyles((theme) => ({
    formContainer: {
        boxShadow: '0 5px 5px 4px',
        border: '5px solid grey',
        borderRadius: 26,
        margin: '1em 0em 2em 0em',
        padding: '1em'
    },
    formControl: {
        marginTop: theme.spacing(1),
        
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button: {
        // display: 'block'
    },
    slider: {
        margin: '1em',
        maxWidth: 800
    }
}));

//value text for the slider 
// function valuetext(value) {
//     return `${value}`;
// }

const EstimateForm = () => {

    const history = useHistory()

//labels for slider
// console.log('does this owrk')
    const marks = [
        {
            value: 0,
            label: '$0',
        },
        // {
        //     value: 50,
        //     label: '$50',
        // },
        {
            value: 100,
            label: '$100',
        },
        // {
        //     value: 150,
        //     label: '$150',
        // },
        {
            value: 200,
            label: '$200',
        },
        // {
        //     value: 250,
        //     label: '$250',
        // },
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
    const initialValues = {
        name: '',
        // email: '',
        residence: '',
        utilityCompany: '',
        // billAmount: '',
        roofType: '',
    }

    const [formState, setFormState] = useState({name: '', email:'', residence:'', utilityCompany: '', billAmount: 0, roofType:'' })

    const [errors, setErrors] = useState(initialValues)

    useEffect(() => {
        localStorage.setItem('customer-data', JSON.stringify(formState))
    })

    const validate = () => {
        let temp = {};
        temp.name = formState.name?'':"This field is required"
        temp.residence = formState.residence?'':"This Field is required"
        temp.utilityCompany = formState.utilityCompany?'':"This Field is required"
        temp.roofType = formState.roofType?'':"This Field is required"
        setErrors({
            ...temp
        })
        console.log('temp',temp)
        
        return Object.values(temp).every(x => x === '' )
        
    }
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
        console.log('clicky clicky')
        if(validate()){
            console.log('errors submit', errors)
            history.push('/results')
            
        }else{ console.log(errors)}
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

                <Typography variant={'h4'}>How Much Can I Save With Solar?</Typography>
                <Typography variant = {'body2'}>There are many factors that go into how much each individual saves with solar and the only way to know exactly what solar will look like for you is with a personalized quote.  This tool gives a simple snapshot of potential savings and tax incentives based on your location and bill amount!</Typography>
                <form onSubmit={handleSolarCalc}>
                    <Grid container justify='center' spacing ={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField className={classes.formControl} fullWidth id="name" name="name" label="Name" variant="filled" onChange={handleChange} helperText={errors.name} error = {errors.name.length >1}>
                            </TextField>                        
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField  className={classes.formControl} fullWidth id="email" name="email" label="Email" variant="filled" onChange={handleChange}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl 
                            className={classes.formControl} 
                            fullWidth 
                            variant="filled"
                            error = {errors.residence.length >1}>
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
                                {errors.residence && <FormHelperText>{errors.residence}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl 
                            className={classes.formControl}
                            fullWidth variant="filled"                                    
                            error = {errors.utilityCompany.length >1}>
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
                                {errors.utilityCompany && <FormHelperText>{errors.utilityCompany}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} className={classes.slider}>
                            <Typography id="discrete-slider" gutterBottom>
                                Average Bill
                            </Typography>
                            <Slider
                                defaultValue={0}
                                color = 'secondary'
                                // getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks={marks}
                                min={0}
                                max={400}
                                name="billAmount"
                                onChange={sliderValue}
                                
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formControl} variant="filled" 
                            fullWidth
                            error = {errors.roofType.length >1}>
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
                                {errors.roofType && <FormHelperText>{errors.roofType}</FormHelperText>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <Button variant="contained" color="secondary" type='submit'   >
                            Solar Pulse Check
                        </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Box>
        
    )
};

export default EstimateForm;