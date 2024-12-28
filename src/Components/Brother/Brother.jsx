import { useContext, useState } from "react";
import { MoneyContext } from "../Granpa/GrandPa";


const Brother = () => {
    const [money]=  useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>Grand: {money }</p>
            
        </div>
    );
};

export default Brother;