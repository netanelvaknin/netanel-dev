import styled from "styled-components/macro";
import {mobile} from '../../utils/screen-sizes';

export const AboutStyle = styled.div`
  display: flex;
  @media ${mobile} {
    padding-top: 2rem;
  }

  img {
    max-height: 45rem;
  }

  & > div {
    margin-left: 3rem;
  }

  div {
    flex: 1;
  }

  p {
    max-width: 65rem;
  }
`;
