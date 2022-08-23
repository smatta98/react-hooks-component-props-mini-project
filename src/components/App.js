import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
// import Article from "./Article";
import About from "./About";

console.log(blogData);

function App() {
    // let aboutText = blogData.map(text => <About about = {text.about} />)
    // let blogTitle = blogData.map(title => <Header blogName = {title.posts.title} />)
    

  return (
    <div className="App">
      <Header blogTitle = {blogData.name}/>
      <About aboutText = {blogData.about}/>
      <ArticleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;


//App
  // -Header
  // -About
  // -ArticleList
  //     -Article