"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './components/newsitems';

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
    <div>
      <h2 className='text-center'>Latest <span className="badge text-bg-danger">News</span></h2>
      {news.map((newsItem, index) => (
        <NewsItem
          key={index}
          title={newsItem.title}
          description={newsItem.description}
          src={newsItem.urlToImage}
          url={newsItem.url}
        />
      ))}
    </div>
  );
};

export default News;
