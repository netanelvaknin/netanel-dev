import { useFetchPosts } from "../../hooks";
import { PostModel } from "../../context/posts/PostsProvider";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

function Blog() {
  const posts = useFetchPosts();
  const history = useHistory();

  return (
    <div>
      {posts?.reverse().map((post: PostModel, index: number) => {
        return (
          <PostContainer key={post._id} onClick={() => history.push(`/blog/${post._id}`)}>
            <PostNumber>{index + 1}</PostNumber>
            <div>
              <h2>{post.title}</h2>
              <CreatedAtText>נכתב בתאריך: {post.createdAt}</CreatedAtText>
            </div>
          </PostContainer>
        );
      })}
    </div>
  );
}

const PostContainer = styled.div`
  margin: 2rem 0 3rem 0;
  max-width: 31rem;
  display: flex;
  cursor: pointer;

  h2 {
    line-height: 1.3;
  }
`;

const PostNumber = styled.span`
  font-family: ${props => props.theme.fonts.bold};
  font-size: 4rem;
  color: rgba(230, 230, 230, 1);
  margin-left: 2rem;
`;

const CreatedAtText = styled.span`
  font-size: 1.8rem;
  font-family: ${(props) => props.theme.fonts.light};
  display: block;
  margin-top: 1rem;
`;

export default Blog;
