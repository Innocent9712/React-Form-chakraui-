import React, {useState} from 'react'
import {FormHelperText, Stack, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'


function PrettyForm() {
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const isInvalid = password === '' ||emailAddress === '';
    const [showPassword, setShowPassword] = useState(true)

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
        <form method='POST' onSubmit={handleSignIn}>
            <Stack maxWidth={600} margin='auto' spacing={5} marginTop={5}>
                <FormControl>
                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                    <Input variant='filled' isRequired type='email' id='email' value={emailAddress} onChange={({target})=>setEmailAddress(target.value)} />
                    <FormHelperText id='email'>Your account email address</FormHelperText>
                </FormControl>
                
                 <FormControl>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <InputGroup>
                        <Input variant='filled' isRequired type={showPassword?"text":"password"} id='password' value={password} onChange={({target})=>setPassword(target.value)} />
                        <InputRightElement width='4.6rem'>
                            <Button height='1.8rem' size='sm' onClick={()=> setShowPassword(!showPassword) } >
                                {showPassword?"hide":"show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <Button colorScheme="teal" type='submit' disabled={isInvalid}>Sign In</Button>
                </FormControl>
            </Stack>
        </form>
    )
}

export default PrettyForm
