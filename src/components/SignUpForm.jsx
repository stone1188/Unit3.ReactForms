/* eslint-disable react/prop-types */
import { useState } from "react"

export default function SignUpForm ({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        const user = {username, password};
        try {
            event.preventDefault();
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
                method: "POST",
                headers: {"content-type":'application/json'},
                body:JSON.stringify(user)
            })
            const result = await response.json();
            setToken(result.token);
            console.log(result);
        } catch (error) {
            console.error(setError)
        }
    }

    return (
   
    <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label >Username: 
                <input type="text" value={username} onChange ={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label >Password: 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button>Submit</button>
        </form>
    </>

    )
}