import { styled } from "styled-components";

export const StyledButton = styled.button`
  margin: 8px 0;
  padding: 8px 16px;
  border: 2px solid #007bff;
  background-color: transparent;
  border-radius: 9999px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledFilledButton = styled(StyledButton)`
  background-color: #2980b9;
  border: none;
  color: #fff;
`;
