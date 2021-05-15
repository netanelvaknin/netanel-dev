import { useFetchPosts } from "../../hooks";
import { PostModel, PostsContext, PostsContextProps } from "../../context/posts/PostsProvider";
import { useHistory } from "react-router-dom";
import {useContext, useEffect, useState} from 'react';
import Header from './header/Header';
import Recent from './recent/Recent';

const Home = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const posts: any = useFetchPosts();
  const postsContext: PostsContextProps | undefined = useContext(PostsContext);

  useEffect(() => {
    postsContext?.setPosts(posts);
    const recent = posts.map((post: PostModel, index: number) => index <= 3 ? post : null);
    setRecentPosts(recent);
  }, [posts]);

  return (
    <div>
      <Header />
      <Recent recentPosts={recentPosts}/>
    </div>
  );
}

export default Home;
