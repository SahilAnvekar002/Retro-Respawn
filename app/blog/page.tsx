import React from 'react'
import BlogPage from './BlogPage'

async function Blog() {

    const data = await fetch(`https://newsapi.org/v2/everything?q=esports&apiKey=${process.env.API_KEY}`);
    const res = await data.json();

    return (
        <BlogPage blogs={res.articles} />
    )
}

export default Blog
