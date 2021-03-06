import { useState, useContext } from 'react';
import { firebaseContext } from '../context/firebase'
import { Form } from "../components";
import {Routers} from '../constants/Routers'
import { useNavigate } from 'react-router-dom';

function SignupformContainer(){

    const { firebaseApp } = useContext(firebaseContext)
    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValid = email=== '' | password === '' | name === ''
    
    function handleSubmit(event){
        event.preventDefault()

        
        firebaseApp.auth().createUserWithEmailAndPassword( email, password ) 
        .then((result) => {
            result.user.updateProfile({
                displayName: name,
                photoId: Math.floor(Math.random()* 5) + 1
            })
            .then(() => {
                navigate(Routers.BROWSE)
            })
        }).catch(( error ) => {
            setEmail('')
            setPassword('')
            setError( error.message )
        })

    }


    return(
        <Form>

            <Form.Inner>

                <Form.Title> Sign Up </Form.Title>

                <Form.Base onSubmit={(event) => handleSubmit(event)} method='POST'>
                    <Form.Column error={error}>
                        <Form.Input 
                            type='text' 
                            value={name} 
                            placeholder='First Name' 
                            onChange={({target}) => setName(target.value)}
                        />
                        {error ? <Form.Error> {error} </Form.Error> : null}

                        <Form.Input 
                            type='email' 
                            value={email} 
                            placeholder='Email Address' 
                            onChange={({target}) => setEmail(target.value)}
                        />
                        {error ? <Form.Error> {error} </Form.Error> : null}

                        <Form.Input 
                            type='password'
                            value={password} 
                            placeholder='Password' 
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        {error ? <Form.Error> {error} </Form.Error> : null}
                    </Form.Column>
                    
                    <Form.Column>
                        <Form.Submit disabled={isValid}> Sign Up </Form.Submit>
                    </Form.Column>

                    <Form.Column>
                        <Form.MediumText>Already a member? <Form.Link to={Routers.SIGN_IN} >Sign in</Form.Link></Form.MediumText>
                    </Form.Column>
                </Form.Base>


            </Form.Inner>
            
        </Form>
    )
}


export default SignupformContainer