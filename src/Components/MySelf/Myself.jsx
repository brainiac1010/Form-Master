import Friend from "../friend/friend";


const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>

            <section className="flex">
<Friend  asset={asset}></Friend>

            </section>
        </div>
    );
};

export default Myself;