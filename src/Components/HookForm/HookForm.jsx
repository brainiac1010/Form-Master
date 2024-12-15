import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoni ')
const emailState  =useInputState('rojoni@asd.go')
    const handleSubmit = (e) => {
        console.log('form data',emailState.value)
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Enter your name" /> <br /> */}
                <input {...emailState}type="email" name="email" placeholder="Enter your email" /> <br />
                <input type="password" name="password" placeholder="Enter your phone number" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;