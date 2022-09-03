import styled from "styled-components";

export const PageDetail = styled.div`
  /* padding-right: 400px;
  padding-left: 400px; */
  display: grid;
  grid-template-areas:
    'imagens imagens'
    'poderes tipos'
    'poderes ataques';
  gap: 20px;
`

export const ImagesDetails = styled.div`
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  grid-area: imagens;
  img{
    width: 15vw;
  }
`
export const Containers = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr ; */
  display: flex;
  justify-content: flex-end;
    align-content: center;
    align-items: stretch;
`

export const Container2 = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 1fr ; */
`
export const Poderes = styled.div`
  text-align: center;
  border: 5px solid #feca05;
  background-color: #fce38c;
  border-radius: 10px;
  margin-right: 20px;
  grid-area: poderes;
  padding: 10px;
`
export const Tipos = styled.div`
  text-align: center;
  border: 5px solid #feca05;
  background-color: #fce38c;
  border-radius: 10px;
  margin-bottom: 20px;
  grid-area: tipos;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`

export const Ataques = styled.div`
  text-align: center;
  border: 5px solid #feca05;
  background-color: #fce38c;
  border-radius: 10px;
  grid-area: ataques;
  gap: 10px;
  padding: 10px;
` 

  



