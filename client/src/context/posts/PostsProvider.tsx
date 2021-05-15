import {createContext, useState} from 'react';

interface PostModel {
    _id: string;
    content: string;
    title: string;
    createdAt: string;
    description: string;
}

interface PostsProviderProps {
    children?: React.ReactNode;
}

interface PostsContextProps {
    posts: PostModel[];
    setPosts: (posts: []) => void;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

const PostsProvider = ({children}: PostsProviderProps) => {
    const [posts, setPosts] = useState([]);
    return (
        <PostsContext.Provider value={{posts, setPosts}}>{children}</PostsContext.Provider>
    )
};

export default PostsProvider;