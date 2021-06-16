import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import AddPost from "./add-post/AddPost";
import MyPosts from "./my-posts/MyPosts";
import Login from "./login/Login";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Sidebar } from "./AdminStyles";
import { Button } from "@material-ui/core";

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
        <Sidebar>
          <Button onClick={() => history.push(`${url}/posts`)}>
            המאמרים שלי
          </Button>
          <Button onClick={() => history.push(`${url}/posts/insert`)}>
            הוסף מאמר חדש
          </Button>
        </Sidebar>
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
