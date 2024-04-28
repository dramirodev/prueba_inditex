import styled from "styled-components";

export const Title = styled.h1`
  color: blue;
  border-bottom: 1px solid darkgrey;
`;

// TODO: Change unit to rem

export const FeedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding-top: 50px;
`;

export const PageContainer = styled.main`
  display: block;
  padding: 40px 60px;
  align-items: center;
  justify-content: center;
`;
