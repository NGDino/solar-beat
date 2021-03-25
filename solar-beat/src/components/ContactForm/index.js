import React, {useState} from 'react';
import {Paper, TextField, FormControl, RadioGroup, FormControlLabel, Button, Radio, FormLabel} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formContainer: {
        height: 'fit',
        width: 'auto',
        margins: 'auto',
        padding: '2em',
        boxShadow: '0 5px 5px 4px',
        border: '5px solid grey',
        borderRadius: 26,
        width: 'fit'
    }
}));



const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: 0,
        phone: '',
        owner: true,
        
    }

    const [values, setValue] = useState(initialValues);
    const [errors, setErrors] = useState({})

    
    const validate = () => {
        let temp = {};
        temp.name = values.name?'':"This field is required"
        temp.email = (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(values.email)?'' :"Not a valid email"
        temp.address = values.address?'':"This Field is required"
        temp.city = values.city?'':"This Field is required"
        temp.state = values.state?'':"This Field is required"
        temp.zip =  (/^\d{5}$/).test(values.zip)?'':"Enter a 5 digit zip code"
        temp.phone = (/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/).test(values.phone)?'':"Not a valid phone number"
        temp.owner = values.owner === true ? '':"You must be a homeowner to go solar"
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
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', values, errors)
        if(validate()){
            alert('works biotch')
            console.log('errors submit', errors)
        }else{ alert('Fix form errors')}
    }

    return (
        <Paper elevation ={3} varients="outlined" className={classes.formContainer} >
            <h1>How can we Help you</h1>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        className={classes.formControl} 
                        onChange = {handleChange}
                        id="name" 
                        name="name" 
                        label="Name" 
                        variant="filled" 
                        helperText={errors.name}
                        error = {errors.name}
                    />
                    <TextField 
                        onChange = {handleChange}
                        className={classes.formControl} 
                        id="email" 
                        name="email" 
                        label="Email" 
                        variant="filled"
                        helperText={errors.email}
                        error = {errors.email}
                        />
                    <TextField 
                        className={classes.formControl} 
                        onChange = {handleChange}
                        id="address" 
                        name="address" 
                        label="Address" 
                        variant="filled" 
                        helperText={errors.address}
                        error = {errors.address}
                        />
                    <TextField 
                        className={classes.formControl} 
                        onChange = {handleChange}
                        id="city" 
                        name="city" 
                        label="City" 
                        variant="filled"
                        helperText={errors.city}
                        error = {errors.city} 
                        />
                        <TextField 
                        className={classes.formControl} 
                        onChange = {handleChange}
                        id="state" 
                        name="state" 
                        label="State" 
                        variant="filled" 
                        helperText={errors.state}
                        error = {errors.state}
                        />
                    <TextField 
                        className={classes.formControl} 
                        onChange = {handleChange}
                        id="zip" 
                        name="zip" 
                        label="Zip Code" 
                        variant="filled"
                        helperText={errors.zip}
                        error = {errors.zip}
                        />
                    <TextField 
                        classzip={classes.formControl} 
                        onChange = {handleChange}
                        id="phone" 
                        name="phone" 
                        label="Phone" 
                        variant="filled" 
                        helperText={errors.phone}
                        error = {errors.phone}
                        />
                    


                    <FormControl component="fieldset">
                        <FormLabel component="legend">Do You Own Your Home?</FormLabel>
                        <br/>
                        <RadioGroup aria-label="owner" name="owner1" value={values.owner} onChange={handleChange}>
                            <FormControlLabel value= {true} control={<Radio />} label="I own" />
                            <FormControlLabel value={false} control={<Radio />} label="I am renting" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        type='submit'
                        disabled >
                            Request a Quote
                    </Button>

                </form>
            </Paper>
    )
}

export default ContactForm;