import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 11rem;
  height: 11rem;
  margin: 20px;
  padding: 10px;
  list-style-type: none;
  background-color: #8Ae;
  border-radius: 10px;
  align-items: center;

  img {
    width: 150px;
    height: 140px;
  }

  p {
    text-align: center;
    color: white;
    text-transform: uppercase;
  }
`;
export const Buttons = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Conteudo = styled.div`
  margin: 10px;
  /* display: flex;
    flex-wrap: wrap;
    gap: 2px;
    justify-content: center;
    align-items: center; */
    `