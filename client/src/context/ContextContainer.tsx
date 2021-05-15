import PostsProvider from './posts/PostsProvider';

interface ContextContainerProps {
    children?: React.ReactNode;
}

const ContextContainer = ({children}: ContextContainerProps) => {
    return (
        <PostsProvider>
            {children}
        </PostsProvider>
    )
};

export default ContextContainer;