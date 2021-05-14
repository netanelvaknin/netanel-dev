import { useEffect, useState } from "react";
import instance from "../../../api";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [cookies] = useCookies();

  useEffect(() => {
    instance.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleRemovePost = async (idToRemove: string) => {
    await instance
      .post(
        "/posts/delete",
        {
          _id: idToRemove,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      });
  };

  return (
    <div>
      {posts.length > 0 ? posts.map((post: any) => {
        return (
          <div key={post._id}>
            <p>{post.title}</p>
            <p>{post.createdAt} נוצר ב-</p>
            <button onClick={() => history.push(`/admin/${post._id}`)}>
              עריכה
            </button>
            <button
              onClick={() => {
                handleRemovePost(post._id);
              }}
            >
              מחיקה
            </button>
          </div>
        );
      }) : <h1>No posts</h1>}
    </div>
  );
}

export default MyPosts;
