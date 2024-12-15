import { useEffect, useRef } from "react";


const RefForm = () => {


    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(numberRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Enter your name" /> <br />
                <input ref={emailRef} defaultValue={'abc@gmail'} type="email" name="email" placeholder="Enter your email" /> <br />
                <input ref={numberRef} type="number" name="phone" placeholder="Enter your phone number" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;