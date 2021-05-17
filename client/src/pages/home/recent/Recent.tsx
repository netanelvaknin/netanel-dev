import { PostModel } from "../../../context/posts/PostsProvider";
import { useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";
import styled from "styled-components/macro";
import { mobile } from "../../../utils/screen-sizes";
import { Skeleton } from "@material-ui/lab";

interface RecentProps {
  recentPosts: PostModel[];
}

const Recent = ({ recentPosts }: RecentProps) => {
  const history = useHistory();

  return (
    <>
      {<RecentPostsPrimaryTitle>מאמרים אחרונים</RecentPostsPrimaryTitle>}
      <RecentPostsContainer>
        {recentPosts.length > 0 ? (
          recentPosts.map((post) => {
            return (
              <RecentPost
                key={post?._id}
                onClick={() => history.push(`/blog/${post._id}`)}
              >
                <CardTitle>{post?.title}</CardTitle>
              </RecentPost>
            );
          })
        ) : (
          <>
            <RecentPostLoader />
            <RecentPostLoader />
            <RecentPostLoader />
          </>
        )}
      </RecentPostsContainer>
    </>
  );
};

const RecentPostLoader = () => {
  return (
    <div style={{flex: 1, margin: '0 0 2rem 1rem'}}>
      <Skeleton animation="wave" width="100%"/>
      <Skeleton animation="wave" width="100%"/>
      <Skeleton animation="wave" width="100%"/>
    </div>
  );
};

const RecentPostsContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;

  @media ${mobile} {
    flex-direction: column;
  }

  & > *:last-child {
    margin-left: 0;
  }
`;

const RecentPost = styled(Card)`
  flex: 1;
  padding: 2rem;
  margin-left: 2rem;
  cursor: pointer;

  @media ${mobile} {
    margin-left: 0;
    margin-bottom: 2.5rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 2.5rem;
  line-height: 1.3;
`;

const RecentPostsPrimaryTitle = styled(Title)`
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const CardTitle = styled(Title)`
  min-height: 7rem;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 2.2rem;
`;

export default Recent;
