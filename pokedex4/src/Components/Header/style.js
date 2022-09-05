import styled from "styled-components";

export const Top = styled.header`
    width: 100%;
    height: 20vh;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 20vw;
    height: 20vh;
    padding: 5px;
`

export const Button = styled.button`
        width: 12rem;
        margin-right: 2rem;
        padding: 1rem;
        text-transform: uppercase;
        border: none;
        cursor: pointer;
        background-color: gray;
        color: white;
        font-weight: bold;
        box-shadow:0 5px 0 black;
        :hover {
            background-color: #434141;
            box-shadow:0 5px 0 black;
        }
        :active {
            position:relative;
            top:5px;
            box-shadow:none;
        }
    
    
`