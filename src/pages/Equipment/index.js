import React from 'react';
// import EquipmentHero from '../../components/EquipmentHero';
import EquipmentCards from '../../components/EquipmentCards';
import {Box} from '@material-ui/core';

//style to make Paper opacity, centered border



const Equipment = () =>{
    
    return(
        <Box component='div' bgcolor="secondary.light">
            
            <EquipmentCards/>
        </Box>
        

    )
}
export default Equipment;