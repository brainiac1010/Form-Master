
import Cousin from '../Cousin/Cousin';
import { useContext } from "react";
import { MoneyContext } from '../Granpa/GrandPa';



const Aunt = () => {
    const[money,setMoney]= useContext(MoneyContext)
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>

            <Cousin name={'arman'} ></Cousin>
            <Cousin name ={'hossain'}></Cousin>
            </section>

            <p>Money:{money}</p>
            <button onClick={()=>setMoney(money+1000)}> Add 1000TK</button>
        </div>
    );
};

export default Aunt;