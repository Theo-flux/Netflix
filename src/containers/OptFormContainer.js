import { OptForm } from '../components'

function OptFormContainer(){
    return(
        <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            
            <OptForm.Row>
                <OptForm.Input type='email' placeholder='Email address'/>
                <OptForm.Button>
                    <OptForm.Span>Get Started</OptForm.Span>
                    <OptForm.Span><OptForm.Icon className='ri-arrow-right-s-line' ></OptForm.Icon></OptForm.Span>
                </OptForm.Button>
            </OptForm.Row>
        </OptForm>
    )
}

export default OptFormContainer