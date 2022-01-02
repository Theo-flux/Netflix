import { Inner, Container, Title, Question, Answer, Icon, Row, Item } from "./styles/Accordion"


function Accordion( {children, ...restProps} ){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Accordion.Inner = function AccordionInner({children, ...restProps}){
    return <Inner {...restProps}>{children}</Inner>
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

Accordion.Row = function AccordionRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Accordion.Icon = function AccordionIcon({...restProps}){
    return <Icon {...restProps}></Icon>
}

Accordion.Question = function AccordionQuestion({children, ...restProps}){
    return <Question {...restProps}>{children}</Question>
}

Accordion.Answer = function AccordionAnswer({children, ...restProps}){
    return <Answer {...restProps}>{children}</Answer>
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

export default Accordion

