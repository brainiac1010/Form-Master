import Uncle from "../Uncle/Uncle";
import Dad from "../Dad/Dad";
import Aunt from "../Aunt/Aunt";
import './GrandPa.css'
import { createContext } from "react";


cosnt AssetContext = createContext('GOLD')
const GrandPa = () => {

    const asset = 'diamon ring '
    return (
        <div className="GrandPa ">
            <h2>GrandPa</h2>

            <AssetContext.Provider value = 'gold'>

                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunt></Aunt>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default GrandPa;

/*
1. creat a context and export 

2. add provider for the cotext with a value 
 */