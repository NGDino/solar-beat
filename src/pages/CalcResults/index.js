import React from 'react';
import {Redirect} from 'react-router-dom';
import Snapshot from '../../components/Results';


const CalcResults = () =>{

    const data = JSON.parse(localStorage.getItem('customer-data'));
    console.log('customer-data', data)

    if(data.name === '' || data.billAmount ===
    0 ){
        return <Redirect to= '/estimate'/>
    }
    

    return(
        <div>
            <Snapshot/>
        </div>
    )
}

export default CalcResults