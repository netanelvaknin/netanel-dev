import {useState, useEffect} from 'react';
import instance from '../api';

export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        instance.get('/posts').then((res) => {
            console.log(res);
            setPosts(res.data);
        })
    }, []);

    return posts;
}