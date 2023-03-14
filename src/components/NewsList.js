import React, { useState, useEffect }from 'react'
import axios from 'axios';

const NewsList = () => {

    const [ articles, setArticles ] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-02-14&sortBy=publishedAt&apiKey=c432f053df844de99a0e1a43560c6ef6')
            console.log(res);
            setArticles(res.data.articles)
        }
       getArticles();
    }, [])


  return (
    <div>News List Will Appear Here</div>
  )
}

export default NewsList