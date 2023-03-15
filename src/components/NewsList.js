import React, { useState, useEffect }from 'react'
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {

    const [ articles, setArticles ] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get('https://newsapi.org/v2/everything?q=government&from=2023-02-14&sortBy=publishedAt&apiKey=c432f053df844de99a0e1a43560c6ef6')
            console.log(res);
            setArticles(res.data.articles)
        }
       getArticles();
    }, [])


  return (
    <div className='article-component'>
      {articles.map(article => {
        return (
          <NewsItem title={article.title} description={article.description}
            url={article.url} urlToImage={article.urlToImage}
          />
        )
      })}
    </div>
  )
}

export default NewsList