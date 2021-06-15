import styled from "styled-components/macro";

const ErrorMessageStyle = styled.span`
  color: ${(props) => props.theme.palette.error.main};
  font-size: 1.6rem;
  display: block;
  margin: 2rem 0;
`;

interface ErrorMessageProps {
  children?: React.ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <ErrorMessageStyle>{children}</ErrorMessageStyle>;
};

export default ErrorMessage;
