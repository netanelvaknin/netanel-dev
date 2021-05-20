import { PostModel } from "../../context/posts/PostsProvider";
import {useEffect, useState} from 'react';
import Header from './header/Header';
import Recent from './recent/Recent';
import Newsletter from './newsletter/Newsletter';
import instance from '../../api';

const Home = () => {
  const [recentPosts, setRecentPosts] = useState<PostModel[] | []>([]);

  useEffect(() => {
    instance.post('/posts/recent').then(({data}) => {
      setRecentPosts(data);
    })
  }, []);

  return (
    <div>
      <Header />
      <Recent recentPosts={recentPosts}/>
      <Newsletter />
    </div>
  );
}

export default Home;
