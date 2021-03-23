import React, {useState} from 'react';

    const rates = {
        1 : 0.23, //0-100
        2 : 0.25, //101-150
        3 : 0.27, //150-200
        4 : 0.275,//201-300
        5 : 0.28, //300+
    }

    const sunHours= 1325;

const Snapshot= () => {
    //get form data from local storage
    const data = JSON.parse(localStorage.getItem('customer-data'));
    console.log(data)


    const billPrice = data.billAmount
    console.log('bill price', billPrice)

    
    
    function setRate(billPrice){
        if(billPrice <= 100){
            return (billPrice / rates[1]) * 12 / sunHours
        }else if(billPrice>= 101 && billPrice <=150){
            return (billPrice / rates[2]) *12 / sunHours
        }else if(billPrice>= 151 && billPrice <=200){
            return (billPrice / rates[3]) *12 / sunHours
        }else if(billPrice>= 201 && billPrice <=300){
            return ((billPrice /  rates[4]) *12) / sunHours
        }
        else {
            return ((billPrice / rates[5])*12) /sunHours
        }
        
    }
    
    const systemPrice = (setRate(billPrice) * 1000)*4.00 
    console.log('yearlydude', systemPrice)
    
    

    function getTaxIncentive(total){
        
        let incentive = systemPrice * 0.26
        
        return incentive.toFixed(2)
    }

    const taxCredit = getTaxIncentive()

            
    const interest = .04

    const p = systemPrice

    const r = interest/12

    const t = 300
    let usablePay = '0'

    function getPayment(p,r,t){
        

        console.log(p)


        const d =  (Math.pow((1+r), t) - 1 ) / (r * (Math.pow((1+r),t)))
    
        const payment = (p / d).toFixed(2)
        
    
    
        return payment

    
    }

    const yearlySave = ((billPrice - getPayment(p,r,t))*12).toFixed(2)
    

    
    
    const totalYearOne = (parseFloat(yearlySave)+ parseFloat(taxCredit)).toFixed(2)
    console.log('numbers needed',totalYearOne)
    

    return(
        <div>
            <div>
                <h4>Hey {data.name.charAt(0).toUpperCase() + data.name.slice(1)}, Great news looks like solar could be advantageous for your home!</h4>
                <p><strong>REMEMBER</strong> This is a rough estimate there are several factors that could still lower your savings or disqualify your home, but if you like what you see lets find out, get a quote today!</p>
                    <h1>Financing as low as ${getPayment(p,r,t)}/mo </h1>
                    <h1>Estimated Federal Tax Incentive ${getTaxIncentive()}</h1>
                    <h1>Year one total Savings ${totalYearOne}</h1>
                    
            </div>
        </div>
    )
}

export default Snapshot;