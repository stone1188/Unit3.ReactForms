/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Authenticate ({token}) {

    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null)

    async function handleClick() {
        try {
            const response = await ("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method:"GET",
                headers:{"Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                }
            })
            const result = await response.json();
            console.log(result)
            setSuccessMessage(result.message);
        } catch(error) {
            setError(error.message)
        }

    }

    return (
        <>
            <div>
                <h2>Authenticate</h2>
                {successMessage && <p>{successMessage}</p>}
                {error && <p>{setError}</p> }
                <button onClick={handleClick}>Authenticate Token</button>
            </div>
        </>
    )
}