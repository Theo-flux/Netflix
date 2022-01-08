import { useState } from "react";
import { Form, Checkbutton } from "../components";

function SigninformContainer(){
    return(
        <Form>
            <Form.Inner>
                <Form.Title> Sign In </Form.Title>
                <Form.Column>
                    <Form.Input type='email' placeholder='Email or phone number' />
                    <Form.Input type='password' placeholder='Password' />
                </Form.Column>
                
                <Form.Column>
                    <Form.Submit> Sign In </Form.Submit>
                    <Form.Row>
                        <Checkbutton>Remember me</Checkbutton>
                        <Form.Link to='/'> need help? </Form.Link>
                    </Form.Row>
                </Form.Column>
            </Form.Inner>
        </Form>
    )
}

export default SigninformContainer
