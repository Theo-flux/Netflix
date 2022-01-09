import { useState } from "react";
import { Form, Checkbutton } from "../components";
import {Routers} from '../constants/Routers'

function SignupformContainer(){

    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValid = email=='' | password == ''
    
    function handleSubmit(event){
        event.preventDefault()

    }


    return(
        <Form>

            <Form.Inner>

                <Form.Title> Sign In </Form.Title>

                <Form.Base onSubmit={(event) => handleSubmit(event)} method='POST'>
                    <Form.Column error={error}>
                        <Form.Input 
                            type='email' 
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
                        <Form.MediumText>Already a member? <Form.Link to={Routers.SIGN_IN} >Sign up</Form.Link></Form.MediumText>
                    </Form.Column>
                </Form.Base>


            </Form.Inner>
            
        </Form>
    )
}


export default SignupformContainer