import { AssetContext } from "../Granpa/GrandPa";
import { useContext } from "react";

const Friend = ({ asset }) => {
  const gift = useContext(AssetContext);

  return (
    <div>
      <h2>Friend</h2>
      <p>Has Asset: {asset}</p>
      <p>Gift from Context: {gift}</p>
    </div>
  );
};

export default Friend;
