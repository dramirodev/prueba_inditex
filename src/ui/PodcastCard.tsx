import styled from "styled-components";

// TODO: Change unit to rem

export const CardImage = styled.img`
  border-radius: 50%;
  border: 1px solid lightgrey;
  position: absolute;
  width: 100px;
  top: -50px;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid lightgrey;
  height: 150px;
  width: 150px;
  border-radius: 10px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardSubTitle = styled.h3`
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
  text-transform: lowercase;
  color: grey;
`;

export const CardDescription = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  width: 90%;
`;
