import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  max-width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  margin: 2rem 0;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin: 1rem 0;
   
  }
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const CardButtons = styled.div`
  display: flex;
  margin: 1rem 0;
  width: 100%;
  gap: 2rem;
`;

export const Button = styled.a`
  padding: 0.8rem 4rem;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    background-color: #28a745;

    &:hover {
      background-color: #218838;
    }
  }
`;
