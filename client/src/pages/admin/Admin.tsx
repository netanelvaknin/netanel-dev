import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import AddPost from "./add-post/AddPost";
import MyPosts from "./my-posts/MyPosts";
import Login from "./login/Login";
import { useRouteMatch, Switch, Route } from "react-router-dom";

function Admin() {
  const { url } = useRouteMatch();
  const [cookies] = useCookies();
  const history = useHistory();

  useEffect(() => {
    if (!cookies.token) {
      history.push("/admin/login");
    }
  }, [cookies, history]);

  return (
    <div style={{ display: "flex" }}>
      {history.location.pathname !== "/admin/login" && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "20rem",
            paddingTop: "3rem",
          }}
        >
          <button onClick={() => history.push(`${url}/posts`)}>
            הפוסטים שלי
          </button>
          <button onClick={() => history.push(`${url}/posts/insert`)}>
            הוסף פוסט חדש
          </button>
        </nav>
      )}

      <Switch>
        <Route exact path={`${url}/posts`}>
          <MyPosts />
        </Route>
        <Route exact path={`${url}/login`}>
          <Login />
        </Route>
        <Route exact path={`${url}/posts/insert`}>
          <AddPost />
        </Route>
        <Route path={`${url}/:postId`}>
          <AddPost />
        </Route>
      </Switch>
    </div>
  );
}

export default Admin;
