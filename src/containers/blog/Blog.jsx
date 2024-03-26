import React from "react";
import "./blog.css";
import Article from "../../components/article/Article";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happpening,
          <br /> We are blogging abot it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageUrl="src\assets\blog01.png" data="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imageUrl="src\assets\blog02.png" data="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article imageUrl="src\assets\blog03.png" data="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article imageUrl="src\assets\blog04.png" data="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
          <Article imageUrl="src\assets\blog05.png" data="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
