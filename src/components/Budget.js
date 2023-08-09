
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch, budget,currency,remaining } = useContext(AppContext);
    const maxBudget = 20000;

    const handleChange = (amt) => {
        
        if(amt > maxBudget) {
            alert(`The budget cannot exceed ${maxBudget}`);
        } 
        else if(amt < remaining) {
            alert(`The budget cannot be lower than the spending`);
        }
        else {      
            dispatch({
                type: "SET_BUDGET",
                payload: amt
            })
        }
    }

    return (
        <div className='alert alert-secondary' style={{whiteSpace:'nowrap'}}>
            <span>Budget {currency}</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        onChange={(event) => handleChange(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;