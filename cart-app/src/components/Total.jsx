import React from 'react';
import { useSelector } from 'react-redux';


const Total = () => {

    const totalItems = useSelector((state) => state.counterReducer.value);

    return(
        <div> total items : {totalItems} </div>
    )

}

export default Total;