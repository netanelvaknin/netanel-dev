import { useParams } from "react-router-dom";
import { useFetchPosts } from "../../hooks";
import { PostModel } from "../../context/posts/PostsProvider";
import parse from "html-react-parser";

const Post = () => {
  const params: { id: string } = useParams();
  const post: PostModel = useFetchPosts(params.id)[0];
  const content = parse(`${post?.content}`);

  return (
    <div>
      <h1>{post?.title}</h1>
      <h3>{post?.description}</h3>
      {content}
    </div>
  );
};

export default Post;
