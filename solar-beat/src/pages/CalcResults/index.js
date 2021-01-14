import react, {useEffect, useState} from 'react'


const CalcResults = () =>{

    const data = JSON.parse(localStorage.getItem('customer-data'));
    console.log('customer-data', data)

    if(data.name === ''){
        
    }
    

    return(
        <div> <h1>YOU MADE IT DUDDDEEEE</h1></div>
    )
}

export default CalcResults