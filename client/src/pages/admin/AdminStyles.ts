import styled from "styled-components/macro";

export const Sidebar = styled.aside`
  height: 90vh;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid rgba(0, 0, 0, 0.12);

  & .MuiButton-text,
  .MuiButton-text:hover {
    text-decoration: none;
  }
`;
