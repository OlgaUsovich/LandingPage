import styled from "styled-components";

export const MainContainer = styled.div`
  grid-area: main;
  margin-top: 172px;
  max-width: 1078px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
  width: 529px;
  font-family: 'Cormorant', 'sans-serif';
  font-weight: 600;
  font-size: 62px;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  margin-top: 28px;
  width: 351px;
  font-size: 20px;
`;

export const Picture = styled.img`
  width: 378px;
  height: 566px;
`;

export const Labels = styled.div`
  margin-top: 99px;
  display: flex;
  gap: 70px;  
  max-width: 941px;
`;
