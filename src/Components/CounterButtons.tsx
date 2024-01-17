import React from "react";
import {  useDispatch } from "react-redux";
import { increment, decrement } from "../Slices/CounterSlice";

function CounterButtons(){
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={()=>dispatch(increment())}>Increase</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>
        </div>
    )
}

export default CounterButtons;