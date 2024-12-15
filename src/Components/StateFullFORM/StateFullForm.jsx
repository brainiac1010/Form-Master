import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail] = useState("arnam@gmail.com");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must  be 6 charact or longer')

        }
        else {
            setError('');
            console.log(name, email, password);
        }

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Phone:", phone);
    };

    const handleEmailChange = (e) => {
        console.log("Email Input:", e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log("Password Input:", e.target.value);
        setPassword(e.target.value);
    };

    const handlePhoneChange = (e) => {
        console.log("Phone Input:", e.target.value);
        setPhone(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleEmailChange}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
                <br />
                <input
                    onChange={handlePhoneChange}
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                />
                <br />
                <input type="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;
