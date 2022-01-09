import { 
    Container, 
    Inner,
    Base,
    Input, 
    Error, 
    Submit, 
    Link, 
    Title, 
    Row, 
    Column, 
    MediumText, 
    SmallText
} from './styles/Form'

function Form({ children, ...restProps }){
    return(
        <Container {...restProps }>{ children }</Container>
    )
}

Form.Inner = function FormInner({ children, ...restProps }){
    return <Inner { ...restProps }> { children }</Inner>
}

Form.Base = function FormBase({ children, ...restProps }){
    return <Base { ...restProps }> { children }</Base>
}

Form.Title = function FormTitle({ children, ...restProps }){
    return <Title { ...restProps }> { children } </Title>
}

Form.SmallText = function FormSmallText({ children, ...restProps }){
    return <SmallText { ...restProps }> { children } </SmallText>
}

Form.MediumText = function FormMediumText({ children, ...restProps }){
    return <MediumText { ...restProps }> { children } </MediumText>
}

Form.Row = function FormRow({ children, ...restProps }){
    return <Row { ...restProps }> { children } </Row>
}

Form.Column = function FormColumn({ children, ...restProps }){
    return <Column { ...restProps }> { children } </Column>
}

Form.Input = function FormInput({ children, ...restProps}){
    return <Input { ...restProps } />
}

Form.Error = function FOrmError({ children, ...restProps }){
    return <Error { ...restProps }>{ children }</Error>
}

Form.Submit = function FormSubmit({ children, ...restProps }){
    return <Submit { ...restProps }> { children } </Submit>
}

Form.Link = function FormLink({ children, ...restProps }){
    return <Link { ...restProps }> { children } </Link>
}

export default Form
