import {useState, useEffect} from 'react';
import {useFetchPosts} from '../../hooks';

function Home() {
  const posts = useFetchPosts();
  console.log(posts);
  return <div>דף הבית</div>;
}

export default Home;
