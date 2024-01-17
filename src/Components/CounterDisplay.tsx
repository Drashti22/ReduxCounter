import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "../Store/store";

const CounterDisplay: React.FC = () =>{
    const counterVslue = useSelector((state: RootState) => state.counter.value);

    return <div>
        CounterValue : {counterVslue}
    </div>
}

export default CounterDisplay;