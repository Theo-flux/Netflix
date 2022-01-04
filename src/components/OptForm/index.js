import { Container, Input, Button, Text, Span, Icon, Row } from './styles/Optform'

function OptForm({ children, ...restProps }) {
    return(
        <Container { ...restProps }>{ children }</Container>
    )
}


OptForm.Text = function OptFormText({ children }){
    return <Text> { children } </Text>
}

OptForm.Input = function OptFormInput({ ...restProps }){
    return <Input { ...restProps }/>
}

OptForm.Button = function OptFormButton({ children, ...restProps }){
    return <Button {...restProps}> { children } </Button>
}

OptForm.Span = function OptFormSpan( { children } ){
    return <Span> { children } </Span>
}

OptForm.Icon = function OptFormIcon( { ...restProps } ){
    return <Icon { ...restProps }></Icon>
}

OptForm.Row = function OptFormRow( { children, ...restProps } ){
    return <Row { ...restProps }> { children } </Row>
}

export default OptForm



