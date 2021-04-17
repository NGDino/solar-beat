import React, {useState} from 'react';
import {Paper, TextField, FormControl, RadioGroup, FormControlLabel, Button, Radio, FormLabel, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formEl: {
        margin: theme.spacing(2),
        
        
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formContainer: {
        marginTop: '2rem',
        marginBottom: '2rem',
        padding: '2em',
        boxShadow: '0 5px 5px 4px',
        border: '5px solid grey',
        borderRadius: 26,
    },
    form: {
        textAlign: 'center',
    }
}));



const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        owner: '',
        
    }

    const [values, setValue] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues)

    
    const validate = () => {
        let temp = {};
        temp.name = values.name?'':"This field is required"
        temp.email = (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(values.email)?'' :"Not a valid email"
        temp.address = values.address?'':"This Field is required"
        temp.city = values.city?'':"This Field is required"
        temp.state = values.state?'':"This Field is required"
        temp.zip =  (/^\d{5}$/).test(values.zip)?'':"Enter a 5 digit zip code"
        temp.phone = (/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/).test(values.phone)?'':"Not a valid phone number"
        temp.owner = values.owner === 'owner' ? '':"You must be a homeowner to go solar"
        setErrors({
            ...temp
        })
        console.log('temp',temp)
        
        return Object.values(temp).every(x => x === '' )
        
    }
    const classes = useStyles();

    const handleChange=(event)=>{
        
        const {name ,value} = event.target;

        setValue({
            ...values,
            [name]: value
        });
        console.log(values)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', values, errors)
        if(validate()){
            alert('works biotch')
            console.log('errors submit', errors)
        }else{ console.log(errors)}
    }

    return (
        <div className={classes.root}>
            <Paper elevation ={3} varients="outlined" className={classes.formContainer}>
                <Grid container  spacing={1} justify='center'>
                    <Grid item>
                        <Typography variant='h3' gutterBottom= {true}  >How can we Help you</Typography>
                    </Grid>
                    <form onSubmit={handleSubmit} classes={classes.form}>

                    <Grid container spacing = {2} justify='center'>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    className={classes.formEl} 
                                    fullWidth
                                    onChange = {handleChange}
                                    id="name" 
                                    name="name" 
                                    label="Name" 
                                    variant="filled" 
                                    helperText={errors.name}
                                    error = {errors.name.length >1}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    onChange = {handleChange}
                                    className={classes.formEl} 
                                    fullWidth
                                    id="email" 
                                    name="email" 
                                    label="Email" 
                                    variant="filled"
                                    helperText={errors.email}
                                    error = {errors.email.length >1}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    className={classes.formEl} 
                                    onChange = {handleChange}
                                    fullWidth
                                    id="address" 
                                    name="address" 
                                    label="Address" 
                                    variant="filled" 
                                    helperText={errors.address}
                                    error = {errors.address.length > 1}
                                    />
                                </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    className={classes.formEl} 
                                    onChange = {handleChange}
                                    fullWidth
                                    id="city" 
                                    name="city" 
                                    label="City" 
                                    variant="filled"
                                    helperText={errors.city}
                                    error = {errors.city.length > 1} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    className={classes.formEl} 
                                    onChange = {handleChange}
                                    fullWidth
                                    id="state" 
                                    name="state" 
                                    label="State" 
                                    variant="filled" 
                                    helperText={errors.state}
                                    error = {errors.state.length > 1}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    className={classes.formEl} 
                                    onChange = {handleChange}
                                    fullWidth
                                    id="zip" 
                                    name="zip" 
                                    label="Zip Code" 
                                    variant="filled"
                                    helperText={errors.zip}
                                    error = {errors.zip.length > 1}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    classzip={classes.formEl} 
                                    onChange = {handleChange}
                                    fullWidth
                                    id="phone" 
                                    name="phone" 
                                    label="Phone" 
                                    variant="filled" 
                                    helperText={errors.phone}
                                    error = {errors.phone.length > 1}
                                    />
                            </Grid>

                            <Grid item xs={12}>

                            <FormControl component="fieldset">
                                <FormLabel component="legend">Do You Own Your Home?</FormLabel>
                                <br/>
                                <RadioGroup aria-label="owner" name="owner" value={values.owner} onChange={handleChange}>
                                    <FormControlLabel value= 'owner' control={<Radio />} label="I own" />
                                    <FormControlLabel value='renter' control={<Radio />} label="I am renting" />
                                </RadioGroup>
                            </FormControl>
                            </Grid>
                            <br/>
                            <Grid item xs={12}>
                            
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                type='submit'
                                
                                >
                                    Request a Quote
                            </Button>
                            </Grid>

                    </Grid>
                    </form>
                    
                </Grid>
                
            </Paper>
        </div>
        
    )
}

export default ContactForm;