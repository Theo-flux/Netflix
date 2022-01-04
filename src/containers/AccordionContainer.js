import { useState } from 'react'
import { Accordion } from '../components'
import FaqData from '../fixtures/faqs.json'
import OptFormContainer from './OptFormContainer'


function AccordionContainer(){

    const [isToggled, setToggle] = useState(false)
    
    function handleToggle(arg){
		
		if(isToggled === arg){
			return setToggle(null)
		}
		setToggle(arg)

	}

    return(
        <Accordion>
            <Accordion.Item>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                {FaqData.map((faq, index) => (
                    <Accordion.Inner key={faq.id}>
                        <Accordion.Row onClick={() => handleToggle(index)}>
                            <Accordion.Question>{faq.header}</Accordion.Question>
                            <Accordion.Icon className={ isToggled === index ? 'ri-close-line':'ri-add-fill'}></Accordion.Icon>
                        </Accordion.Row>
                        
                        {isToggled === index ? (<Accordion.Answer>{faq.body}</Accordion.Answer>) : null}
                    </Accordion.Inner>
                ))}
            </Accordion.Item>
            <Accordion.Item>
                <OptFormContainer/>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionContainer

