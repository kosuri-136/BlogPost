import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import AutherDetail from "./Pages/AutherDetail/AutherDetail";
import PostDetail from "./Pages/PostDetail/PostDetail";
import MostLikedPosts from "./Pages/MostLikedPosts/MostLikedPosts";
import MostCommentedPosts from "./Pages/MostCommentedPosts/MostCommentedPosts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/authors" component={Home} />
          <Route exact path="/authors/:id" component={AutherDetail} />
          <Route exact path="/posts/:postId" component={PostDetail} />
          <Route exact path="/mostlikedposts" component={MostLikedPosts} />
          <Route exact path="/mostcommentedpost" component={MostCommentedPosts} />
          <Redirect to="/authors"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
