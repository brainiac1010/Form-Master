import React, { createContext, useState } from "react";
import Uncle from "../Uncle/Uncle";
import Dad from "../Dad/Dad";
import Aunt from "../Aunt/Aunt";
import "./GrandPa.css";

// Create the context and export it
export const AssetContext = createContext("gold");

export const MoneyContext = createContext(1000)

const GrandPa = () => {
  const asset = "diamond ring";
  const [money,setMoney] = useState(1000)

  return (
    <div className="GrandPa">
      <h2>GrandPa</h2>
      <p> Net Money:{money }</p>

      {/* Provide a value for the context */}
      <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/*
1. creat a context and export it.

2. add provider for the cotext with a value . value coud be anything .

3.useContext to access value in the context API
 */