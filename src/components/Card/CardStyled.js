import styled from "styled-components";

export const ContainerCard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 364px;
  height: 175px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding-left: 15px;
  margin-top: 10px;
`;

export const LikeDislike = styled.div`
    display: flex;
    width: 100px;
    height: 25px;
    border: 1px solid #e0e0e0;
    border-radius: 50px;
    align-items: center;
    justify-content: space-around;
`

export const Comments = styled.div`
    display: flex;
    width: 60px;
    border-radius: 50px;
    border: 1px solid #e0e0e0;
    justify-content: space-around;
    align-items: center;
`

export const DivLikeComments = styled.div`
    display: flex;
    gap: 15px;
`