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
    padding: 2em;
    margin-bottom: 8em;    
    display: flex;
    flex-direction: column;
    gap: 2em;
    background-color: rgba(0,0,0,.70);
    border-radius: .25em;
    border: 2px solid #000;
    transition: .3s all ease-in;

    &:hover {
        background-color: #000;
    }

    @media (min-width: 767px){
        padding: 4em;  
    }
`

export const Title = styled.h1`
    color: #fff;
    font-size: 1.8rem;
`
export const Base = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({error}) => error ? '0em' : '.8em'};
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
    transition: .3s all ease-in;

    &:disabled {
        opacity: 0.5;
    }
`

export const Row = styled.div`
    // border: 1px solid magenta;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const Error = styled.p`
    align-self: flex-start;
    margin-top: .3em;
    color: #DD7502;
    font-size: .8rem;   
    margin-bottom: 1em;
    // border: 1px solid magenta;

    &:last-of-type {
        margin-bottom: 0;
        // border: 1px solid magenta; 
    }
`

export const SmallText = styled.p`
    color: #737373;
    font-size: .875rem;
    cursor: pointer;
`

export const MediumText = styled.p`
    color: #737373;
    font-size: 1.125rem;
`

export const Link = styled(ReactRouterLink)`
    color: #fff;
    font-size: 1.125rem; 
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: #fff;
    }
`


