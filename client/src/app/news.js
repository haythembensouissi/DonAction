"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', 
            apiKey: '1061edad44a642e9af7dde41b317ef6c',
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  console.log(news);

  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <div className="card-container">
        {news.map((article, index) => (
          <div key={index} className="card">
            <img src={article.urlToImage} alt={article.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{article.title}</h2>
              <p className="card-description">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
