import React, {useState} from 'react'

function Form() {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const isInvalid = password === '' ||emailAddress === '';

    const handleSignIn = e => {
        e.preventDefault();
        if (isInvalid) {
            alert("Please Check SIgn In details")
        } else {
            alert("Sign In Accepted")
        }
        setEmailAddress('')
        setPassword('')
    }
    return (
        <form method="POST" onSubmit={handleSignIn}>
            <input required type="text" value={emailAddress} placeholder="Email address" onChange={(e)=> setEmailAddress(e.target.value)} />
            <input required type="text" value={password} placeholder="Password" onChange={({target})=> setPassword(target.value)} />
            <button type="submit" disabled={isInvalid}>Sign In</button>

        </form>
    )
}

export default Form
