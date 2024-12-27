import Uncle from "../Uncle/Uncle";
import Dad from "../Dad/Dad";
import Aunt from "../Aunt/Aunt";
import './GrandPa.css'

const GrandPa = () => {
    return (
        <div className="GrandPa ">
            <h2>GrandPa</h2>

           <section className="flex">
           <Dad></Dad>
            <Uncle></Uncle>  
            <Aunt></Aunt>  
            </section>       
        </div>
    );
};

export default GrandPa;