import styled from "styled-components";
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.section`
    width: 100%;
    margin: auto;
    // border: 1px solid magenta;
`

export const Inner = styled.div`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    padding: 4em;
    padding-bottom: 8em;    
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-color: rgba(0,0,0,.75);;
    border-radius: .25em;
    // border: 1px solid red;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 1.8rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .8em;
`

export const Input = styled.input`
    width: 100%;
    padding: 1em;
    border: none;
    color: #fff;
    font-size: 1rem;
    border-radius: .2em;
    background-color: #333333;

    &::placeholder {
        color: #fff;  
    }

    &:focus{
        outline: none;
    }

`

export const Submit = styled.button`
    width: 100%;
    background-color: #E50914;
    color: #fff;
    font-size: 1rem;
    border: none;
    padding: 1em;
    border-radius: .25em;
`

export const Row = styled.div`
    // border: 1px solid magenta;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const Error = styled.p``

export const SmallText = styled.p``

export const MediumText = styled.p``

export const Link = styled(ReactRouterLink)`
    color: #737373;
    font-size: .875rem; 
    // text-decoration: none;

    &::hover {
        text-decoration: underline;
        color: #fff;
    }
`