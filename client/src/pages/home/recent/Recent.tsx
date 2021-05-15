import { PostModel } from "../../../context/posts/PostsProvider";
import { useHistory } from "react-router-dom";
import {Button} from '@material-ui/core';

interface RecentProps {
  recentPosts: PostModel[];
}

const Recent = ({ recentPosts }: RecentProps) => {
  const history = useHistory();

  return (
    <div>
      {recentPosts.length > 0 && <h2>פוסטים אחרונים</h2>}
      {recentPosts.map((post) => {
        return (
          <div key={post._id}>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <Button onClick={() => history.push(`/blog/${post._id}`)}>
              לקריאה
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Recent;
