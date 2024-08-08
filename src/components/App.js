import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import { Children } from "react/cjs/react.production.min";
// import ArticleList from  "./ArticleList";

console.log("BlogData:", blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} alt={blogData.alt} about={blogData.about}>
        {Children}
      </About>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

