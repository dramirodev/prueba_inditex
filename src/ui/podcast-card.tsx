import styled from "styled-components";

export const CardImage = styled.img`
  border-radius: 50%;
  border: 1px solid lightgrey;
  width: 100px;
  top: -50px;
  z-index: 1;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid lightgrey;
  min-height: 150px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: -50px;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  text-transform: capitalize;
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
  margin-top: 50px;

  p {
    margin: 0;
    font-size: 0.8rem;
    text-align: center;
    white-space: normal;
  }
`;

export const PodcastDescriptioner = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  margin-top: 20px;
  font-size: 0.8rem;
`;
