import React from 'react'
import './article.css'

const Article = ({imageUrl , data,title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div >
          <p>{data}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
