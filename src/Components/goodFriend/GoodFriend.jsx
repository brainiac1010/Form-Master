import { useContext } from "react";
import { AssetContext } from "../Granpa/GrandPa";


const GoodFriend = () => {

    const gift  =  useContext(AssetContext)
    return (
        <div>
            <h2>Good friend</h2>
            <p>take : {gift}</p>
        </div>
    );
};

export default GoodFriend;