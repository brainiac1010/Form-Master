import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoni ')
const emailState =useInputState('rojoni gojoni ')


    const handleSubmit = (e) => {
       console.log('form data', emailState.value )
        e.preventDefault();

    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
                {/* <input type="text" value={name} onChange={handleNameChange} name="name" placeholder="Enter your name" /> <br /> */}
                <input {...emailState} type="email" name="email" placeholder="Enter your email" /> <br />
                <input type="number" name="phone" placeholder="Enter your phone number" /> <br />
                <input type="password"  value='password' />   <br />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;