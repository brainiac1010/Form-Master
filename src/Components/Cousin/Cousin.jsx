import Friend from "../friend/friend";
import GoodFriend from "../goodFriend/GoodFriend";


const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                { asset && <Friend asset={asset}></Friend> }
                {name==='arman' &&<GoodFriend></GoodFriend>}
            </section>
        </div>
    );
};

export default Cousin;