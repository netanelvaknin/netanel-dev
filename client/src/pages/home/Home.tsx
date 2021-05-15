import { useFetchPosts } from "../../hooks";
import { PostModel, PostsContext, PostsContextProps } from "../../context/posts/PostsProvider";
import { useHistory } from "react-router-dom";
import {useContext, useEffect} from 'react';

function Home() {
  const posts: any = useFetchPosts();
  const context: PostsContextProps | undefined = useContext(PostsContext);
  const history = useHistory();

  useEffect(() => {
    context?.setPosts(posts);
  }, [posts]);

  return (
    <div>
      <h1>דף הבית</h1>
      <h2>פוסטים אחרונים</h2>
      {posts.map((post: PostModel, index: number) => {
        if (index <= 3) {
          return (
            <div key={post._id}>
              <p>{post.title}</p>
              <p>{post.description}</p>
              <p>{post.createdAt}</p>
              <button onClick={() => history.push(`/blog/${post._id}`)}>
                קריאה
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Home;
