import { useFetchPosts } from "../../hooks";
import { PostModel, PostsContext, PostsContextProps } from "../../context/posts/PostsProvider";
import {useContext, useEffect, useState} from 'react';
import Header from './header/Header';
import Recent from './recent/Recent';

const Home = () => {
  const [recentPosts, setRecentPosts] = useState<PostModel[] | []>([]);
  const posts: any = useFetchPosts();
  const postsContext: PostsContextProps | undefined = useContext(PostsContext);

  useEffect(() => {
    postsContext?.setPosts(posts);
    const reveresedPosts = posts.reverse();
    const recentPosts: PostModel[] = [];
    reveresedPosts.forEach((post: PostModel, index: number) => {
      if (index <= 2) {
        recentPosts.push(post);
      }
    })

    setRecentPosts(recentPosts);
  }, [posts]);

  return (
    <div>
      <Header />
      <Recent recentPosts={recentPosts}/>
    </div>
  );
}

export default Home;
