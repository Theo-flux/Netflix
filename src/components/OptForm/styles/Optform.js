import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 1em;
    width: 90%;
    // border: 1px solid magenta;

    @media (min-width: 767px){
        width: 80%; 
    }
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background-color: transparent;
    // border: 1px solid magenta;

    @media (min-width: 767px){
        background-color: white;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 1em;
    border: none;
    align-self: center;
    font-size: 1rem;

    &:focus {
        outline: 2px solid #757575;
    }

    @media (min-width: 767px){
        width: 70%;
    }
`

export const Button = styled.button`
    width: 150px;
    padding: 1em;
    border: none;
    background-color: #F40612;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background-color: red;
    }

    @media (min-width: 767px){
        width: 30%;  
        min-width: 200px;
    }
    
`

export const Text = styled.p`
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    // border: 1px solid magenta;
    margin: auto;
    margin-bottom: 1em;
`

export const Span = styled.span`
    // border: 1px solid magenta;
    font-size: 1rem;
    display: flex;

    @media (min-width: 767px){
        font-size: 1.5rem;   
    }
`

export const Icon = styled.i`
    // border: 1px solid magenta;
    align-self: center;
`

