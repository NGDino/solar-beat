import React from 'react';
import {Box} from '@material-ui/core'

import Hero from '../../components/Hero';
import HomeCards from '../../components/HomeCards';
import Equipment from '../Equipment'



const Home= () =>{


    return(
        // <React.Fragment >
    <Box>
        <Hero/>
        <HomeCards/>
        <Equipment  id='equipment'/>
    </Box>
        // </React.Fragment>
        

    )
}
export default Home
