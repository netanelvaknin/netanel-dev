import NotFoundGif from "./lost.gif";
import styled from "styled-components/macro";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  
  return (
    <NotFoundContainer>
      <h1>נראה שהלכת לאיבוד</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
      >
        לחזרה לאתר
      </Button>
      <img src={NotFoundGif} />
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }
`;
