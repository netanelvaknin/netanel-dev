import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetchPosts } from "../../hooks";
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
import { mobile } from "../../utils/screen-sizes";
import loader from "../../assets/gifs/loader.gif";
import instance from "../../api";
import { Button } from "@material-ui/core";

const Post = () => {
  const [postsLength, setPostsLength] = useState(0);
  const params: { id: string } = useParams();
  const post = useFetchPosts(params.id);
  const history = useHistory();
  const html = post?.content || "<div></div>";
  
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

  useEffect(() => {
    instance.get("/posts/posts-length").then((response) => {
      setPostsLength(response.data.length);
    });
  }, []);

  return (
    <div>
      {post ? (
        <PostStyle>
          <Button
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              padding: 0,
            }}
            onClick={() => {
              history.push("/blog");
            }}
          >
            חזרה למאמרים
          </Button>
          <h1>{post.title}</h1>
          <SecondaryHeading>{post.description}</SecondaryHeading>
          <p style={{ marginBottom: "3.5rem" }}>
            נכתב בתאריך: {post.createdAt}
          </p>
          {parsedHTML}
        </PostStyle>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={loader}
            alt="טוען פוסט"
            style={{ width: "20rem", height: "20rem", margin: "0 auto" }}
          />
          <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
            טוען את הפוסט
          </h2>
        </div>
      )}

      {post && (
        <>
          <strong style={{ marginTop: "5rem", display: "block" }}>
            קדימה להפיץ :)
          </strong>
          <ShareIconsContainer>
            <FacebookShareButton
              url={`https://www.easy-front.dev/blog/${params.id}`}
            >
              <FacebookIcon />
            </FacebookShareButton>
            <EmailShareButton
              url={`https://www.easy-front.dev/blog/${params.id}`}
            >
              <EmailIcon />
            </EmailShareButton>
            <WhatsappShareButton
              url={`https://www.easy-front.dev/blog/${params.id}`}
            >
              <WhatsappIcon />
            </WhatsappShareButton>
          </ShareIconsContainer>

          <NavigationButtonsContainer>
            <div>
              {Number(params.id) > 1 && (
                <Button
                  style={{ padding: 0 }}
                  onClick={() => history.push(`/blog/${Number(params.id) - 1}`)}
                >
                  לפוסט הקודם
                </Button>
              )}
            </div>

            <div>
              {Number(params.id) < postsLength && (
                <Button
                  style={{ padding: 0 }}
                  onClick={() => history.push(`/blog/${Number(params.id) + 1}`)}
                >
                  לפוסט הבא
                </Button>
              )}
            </div>
          </NavigationButtonsContainer>
        </>
      )}
    </div>
  );
};

const PostStyle = styled.div`
  iframe {
    width: 100%;
    min-height: 35rem;
  }

  pre {
    @media ${mobile} {
      font-size: 1.6rem;
    }
  }

  @media ${mobile} {
    padding-top: 1rem;
  }

  strong {
    font-family: ${(props) => props.theme.fonts.bold};
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const NavigationButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5.5rem;
`;

const SecondaryHeading = styled.h3`
  font-family: ${(props) => props.theme.fonts.light};
  margin-top: 1.5rem;
  margin-bottom: 2rem;
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
