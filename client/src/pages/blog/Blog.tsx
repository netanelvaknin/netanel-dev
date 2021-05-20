import { useFetchPosts } from "../../hooks";
import { PostModel } from "../../context/posts/PostsProvider";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import loader from "../../assets/gifs/loader.gif";
import Newsletter from "../home/newsletter/Newsletter";

function Blog() {
  const posts = useFetchPosts();
  const history = useHistory();

  return (
    <BlogContainer postsLength={posts.length}>
      {posts.length > 0 ? (
        <>
          <p>את המאמרים יש לקרוא לפי סדר המספרים. קריאה מהנה.</p>
          {posts?.map((post: PostModel, index: number) => {
            return (
              <PostContainer
                key={post._id}
                onClick={() => history.push(`/blog/${index + 1}`)}
              >
                <PostNumber>{index + 1}</PostNumber>
                <div>
                  <h2>{post.title}</h2>
                  <CreatedAtText>נכתב בתאריך: {post.createdAt}</CreatedAtText>
                </div>
              </PostContainer>
            );
          })}
          <ArticlesAreComingSoon>מאמרים נוספים בדרך...</ArticlesAreComingSoon>
          <Newsletter title="אהבתם? הרשמו לניווזלטר שלי" />
        </>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={loader}
            alt="טוען מאמרים"
            style={{ width: "20rem", height: "20rem" }}
          />
          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
            מאמרים בטעינה
          </h2>
        </div>
      )}
    </BlogContainer>
  );
}

const BlogContainer = styled.div<{ postsLength: number }>`
  padding-top: 3rem;
  ${(props) =>
    props.postsLength === 0 &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const PostContainer = styled.div`
  margin: 2rem 0 3rem 0;
  max-width: 31rem;
  display: flex;
  cursor: pointer;

  h2 {
    line-height: 1.3;
  }
`;

const ArticlesAreComingSoon = styled.h2`
  font-size: 2.5rem;
  line-height: 1.3;
  font-family: OpenSansHebrewBold;
  margin-top: 5rem;
`;

const PostNumber = styled.span`
  font-family: ${(props) => props.theme.fonts.bold};
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
