import { useParams } from "react-router-dom";
import { useFetchPosts } from "../../hooks";
import { PostModel } from "../../context/posts/PostsProvider";
import parse, { domToReact } from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Post = () => {
  const params: { id: string } = useParams();
  const post: PostModel = useFetchPosts(params.id)[0];
  const html = post?.content;

  const options = {
    replace: ({ attribs, children }: any) => {
      if (!attribs) {
        return;
      }

      if (attribs.class === "ql-syntax") {
        return (
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {domToReact(children, options)}
          </SyntaxHighlighter>
        );
      }
    },
  };

  const parsedHTML = parse(`${html}`, options);

  return (
    <div>
      {post && (
        <>
          <h1>{post?.title}</h1>
          <h3>{post?.description}</h3>
          {/* {content} */}
          {parsedHTML}
        </>
      )}
    </div>
  );
};

export default Post;
