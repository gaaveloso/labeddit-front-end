import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ContainerSelection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding: 10px;

  h1 {
    color: #373737;
    font-size: 33px;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 70vh;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
`;
export const Checkbox = styled.span`
  input {
    width: 5vw;
    height: 7vh;
    max-width: 20px;
    max-height: 20px;
    border-radius: 2px;
  }
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 5px;
`;

export const Input = styled.input`
  margin: 5px;
  width: 90vw;
  max-width: 500px;
  height: 8vh;
  background-color: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
`;

export const DivStyled = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 27px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const DivButton = styled.div`
    align-items: center;
`
