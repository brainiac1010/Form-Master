import Brother from "../Brother/Brother";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>

            <section className="flex"> 

                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;