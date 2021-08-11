import React from 'react'
import Article from './Article'

const renderArticles = (posts) => (
    posts.map(post => <Article 
            key={post.id} 
            title={post.title}
            image={post.date}
            preview={post.preview}
            minutes={post.minutes}
        />)
)

const ArticleList = ({posts}) => (
    <main>
        {renderArticles(posts)}
    </main>
)

export default ArticleList