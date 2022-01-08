import styled from "styled-components";

export const Container = styled.section`
    padding: 2em 0;
    // border: 1px solid magenta;
    background-color: #00000099;
`
export const Inner = styled.div`
    margin: auto;
    width: 80%;
    max-width: 1100px;
    color: #757575;
    // border: 1px solid blue;
`

export const Link = styled.a`
    margin-bottom: 1em;
    font-size: .8rem;
    cursor: pointer;

    &:hover {
        color: white;
        text-decoration: underline;
    }
    
`

export const Row = styled.div`
    margin: 1em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2em;
    // border: 1px solid magenta;
    
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    // border: 1px solid magenta;

    & ${Link}:last-of-type {
        margin: 0;
    }
`

export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
`

export const Text = styled.p`
    font-size: .8rem;
`






