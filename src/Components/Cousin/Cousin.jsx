import Friend from "../friend/friend";


const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                { asset && <Friend asset={asset}></Friend> }
                
            </section>
        </div>
    );
};

export default Cousin;