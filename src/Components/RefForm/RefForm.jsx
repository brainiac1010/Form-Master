import { useEffect, useRef } from "react";


const RefForm = ({children, formTitle, handleSubmit, submitBtnText = 'Submit' }) => {


    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);

    const handelLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            number: e.target.phone.value,
        }

        handleSubmit(data);
    }

    useEffect(() => {
        nameRef.current.focus();
    }, [])



    return (
        <div>
            <h2>{formTitle}</h2>
            {children}
            <form onSubmit={handelLocalSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Enter your name" /> <br />
                <input ref={emailRef} defaultValue={''} type="email" name="email" placeholder="Enter your email" /> <br />
                <input ref={numberRef} type="number" name="phone" placeholder="Enter your phone number" /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default RefForm;