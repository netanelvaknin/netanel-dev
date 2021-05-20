import { useState, useEffect } from "react";
import instance from "../api";

export const useFetchPosts = (id = "") => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    if (id) {
      instance.get(`/posts/${id}`).then((res) => {
        setPosts(res.data);
      });
    } else {
      instance.get("/posts").then((res) => {
        setPosts(res.data);
      });
    }

    return () => {
      setPosts([]);
    };
  }, [id]);

  return posts;
};
