import { Container, Link, Row, Column, Text, Title  } from "./styles/Footer";


// Functional components
function Footer({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Footer.Link = function FooterLink({children, ...restProps}){
    return(
        <Link {...restProps}>{children}</Link>
    )
}

Footer.Title = function FooterTitle({children, ...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    )
}

Footer.Text = function FooterText({children, ...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    )
}

Footer.Row = function FooterRow({children, ...restProps}){
    return(
        <Row {...restProps}>{children}</Row>
    )
}

Footer.Column = function FooterCOlumn({children, ...restProps}){
    return(
        <Column {...restProps}>{children}</Column>
    )
}


export default Footer