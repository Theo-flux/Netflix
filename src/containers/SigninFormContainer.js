import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { firebaseContext } from '../context/firebase'
import {Routers} from '../constants/Routers'

import { Form, Checkbutton } from "../components";

function SigninformContainer(){

    const navigate = useNavigate()
    const { firebaseApp } = useContext(firebaseContext)

    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValid = email=== '' | password === ''
    
    function handleSubmit(event){
        event.preventDefault()

        firebaseApp.
            auth().
            signInWithEmailAndPassword(email, password)
            .then(() => {
                // push to the browse page once successful
                navigate(Routers.BROWSE)
            })
            .catch((error) => {
                setEmail('')
                setPassword('')
                setError(error.message)
            })

    }


    return(
        <Form>

            <Form.Inner>

                <Form.Title> Sign In </Form.Title>

                <Form.Base onSubmit={(event) => handleSubmit(event)} method='POST'>
                    <Form.Column error={error}>
                        
                        {error ? <Form.Error> {error} </Form.Error> : null}
                        <Form.Input 
                            type='email' 
                            value={email} 
                            placeholder='Email or phone number' 
                            onChange={({target}) => setEmail(target.value)}
                        />

                        <Form.Input 
                            type='password'
                            value={password} 
                            placeholder='Password' 
                            onChange={({ target }) => setPassword(target.value)}
                        />
                    
                    </Form.Column>
                    
                    <Form.Column>
                        <Form.Submit disabled={isValid}> Sign In </Form.Submit>
                        <Form.Row>
                            <Checkbutton>Remember me</Checkbutton>
                            <Form.SmallText> need help? </Form.SmallText>
                        </Form.Row>
                    </Form.Column>

                    <Form.Column>
                        <Form.MediumText>New to Netflix? <Form.Link to={Routers.SIGN_UP}>Sign up</Form.Link></Form.MediumText>
                        <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. </Form.SmallText>
                    </Form.Column>
                </Form.Base>


            </Form.Inner>
            
        </Form>
    )
}


export default SigninformContainer