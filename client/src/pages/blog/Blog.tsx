import instance from "../../api";
import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    instance.get("/posts").then((res) => {
      console.log(res);
    });
  }, []);
  return <div>blog</div>;
}

export default Blog;
