import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Currency =  () => {
    const {dispatch} = useContext(AppContext);

    const handleChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event 
        })
    }

    return(
        <div className='alert alert-success' style={{background:'#228B22',color:'white'}}>
            <label for='currency'>Currency</label>
            <select name='currency' id='currency' onChange={(event) => handleChange(event.target.value)}>
                <option value='£'>&pound; Pound</option>
                <option value='$'>$ Dollar</option>
                <option value='€'>&euro; Euro</option>
                <option value='₹'>₹ Rupee</option>
            </select>
        </div>
        
    );
}

export default Currency;