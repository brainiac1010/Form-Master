import Brother from "../Brother/Brother";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div>
            <h2>Father</h2>

            <section className="flex"> 

                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;