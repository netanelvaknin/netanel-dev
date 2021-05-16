import { PostModel } from "../../../context/posts/PostsProvider";
import { useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";
import styled from "styled-components/macro";

interface RecentProps {
  recentPosts: PostModel[];
}

const Recent = ({ recentPosts }: RecentProps) => {
  const history = useHistory();

  return (
    <>
      {recentPosts.length > 0 && <RecentPostsPrimaryTitle>מאמרים אחרונים</RecentPostsPrimaryTitle>}
      <RecentPostsContainer>
        {recentPosts.map((post) => {
          return (
            <RecentPost key={post?._id} onClick={() => history.push(`/blog/${post._id}`)}>
              <CardTitle>{post?.title}</CardTitle>
            </RecentPost>
          );
        })}
      </RecentPostsContainer>
    </>
  );
};

const RecentPostsContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;

  & > *:last-child {
    margin-left: 0;
  }
`;

const RecentPost = styled(Card)`
  flex: 1;
  padding: 2rem;
  margin-left: 2rem;
  cursor: pointer;
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
`;

export const CardTitle = styled(Title)`
  min-height: 7rem;
`;

export default Recent;
