import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
export const Card = styled.li`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px blue;
    width: 20vw;
    height: 50vh;
    margin: 20px;
    padding: 10px;
    list-style-type: none;
    background-color: gray;

    p{
        text-align: center;
        color: white;
        text-transform: uppercase;
    }
`
export const Buttons = styled.ul`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 20px;
    
`

