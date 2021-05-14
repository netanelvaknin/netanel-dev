import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import instance from "../../../api";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function AddPost() {
  const history = useHistory();
  const [cookies] = useCookies();
  const [content, setContent] = useState<string>("");
  const [description, setDescription] = useState('');
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    instance.get("/posts").then((response) => {
      if (response.data && postId) {
        const postToEdit = response.data.find(
          (post: any) => post._id === postId
        );

        setContent(postToEdit.content);
        setValue("title", postToEdit.title);
      }
    });
  }, []);

  useEffect(() => {
    if (!postId) {
      resetFields();
    }
  }, [postId]);

  const onChange = (content: any, delta: any, source: any, editor: any) => {
    setContent(editor.getHTML());
  };

  const resetFields = () => {
    setValue("title", "");
    setContent("");
  };

  const onSubmit = async (formValues: any) => {
    if (postId) {
      await instance
        .post(
          "/posts/update",
          {
            _id: postId,
            content,
            title: formValues.title,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            resetFields();
            history.push("/admin/posts");
          }
        });
    } else {
      await instance
        .post(
          "/posts/insert",
          {
            content,
            title: formValues.title,
            createdAt: moment().format("LLL"),
            description: formValues.description
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            resetFields();
            history.push("/admin/posts");
          }
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} name="title" placeholder="כותרת הפוסט" />
      <input {...register('description')} name="description" placeholder="תיאור" />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={onChange}
        modules={modules}
      />

      <button type="submit">{postId ? "עדכן" : "הוסף"}</button>
    </form>
  );
}

export default AddPost;

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    [{ direction: "rtl" }],
  ],
};
