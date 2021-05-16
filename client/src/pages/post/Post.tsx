import { useParams } from "react-router-dom";
import { useFetchPosts } from "../../hooks";
import { PostModel } from "../../context/posts/PostsProvider";
import parse, { domToReact } from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import styled from "styled-components/macro";

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
        <PostStyle>
          <h1>{post?.title}</h1>
          <SecondaryHeading>{post?.description}</SecondaryHeading>
          {parsedHTML}
        </PostStyle>
      )}

      <strong style={{marginTop: '5rem', display: 'block'}}>קדימה להפיץ :)</strong>
      <ShareIconsContainer>
        <FacebookShareButton
          url={`https://netanel-dev.co.il/blog/${post?._id}`}
        >
          <FacebookIcon />
        </FacebookShareButton>
        <EmailShareButton url={`https://netanel-dev.co.il/blog/${post?._id}`}>
          <EmailIcon />
        </EmailShareButton>
        <WhatsappShareButton
          url={`https://netanel-dev.co.il/blog/${post?._id}`}
        >
          <WhatsappIcon />
        </WhatsappShareButton>
      </ShareIconsContainer>
    </div>
  );
};


const PostStyle = styled.div`
  iframe {
    width: 100%;
    min-height: 35rem;
  }
`;

const SecondaryHeading = styled.h3`
  font-family: ${(props) => props.theme.fonts.light};
  margin-bottom: 3.5rem;
  margin-top: 1.5rem;
  color: rgba(117, 117, 117, 1);
`;

const ShareIconsContainer = styled.div`
  button {
    margin-top: 1rem;
    margin-left: 1rem;
    svg {
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      filter: opacity(0.7);
    }
  }
`;

export default Post;
