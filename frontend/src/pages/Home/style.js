import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 140px;
  display: grid;
  grid-template-areas: 
    "header ."
    "main .";
  grid-template-rows: 42px 1fr;
  grid-template-columns: 1fr 542px;
  grid-gap: 42px;
`;

export const Banner = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    height: 1080px;
`;