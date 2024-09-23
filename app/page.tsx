import React from 'react'
import HomePage from './HomePage';

async function Home() {

    const data = await fetch(`https://newsapi.org/v2/everything?q=esports&pageSize=5&apiKey=${process.env.API_KEY}`);
    const res = await data.json();

    return (
        <HomePage blogs={res.articles} />
    )
}

export default Home
