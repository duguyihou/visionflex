import styled from "styled-components";

export const Input = styled.input`
  width: 300px;
  border-width: 0;
  background-color: #f7f9fa;
  padding: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid grey;
  &:hover,
  &:focus {
    outline: none;
    background-color: #e8f0fe;
  }
`;
