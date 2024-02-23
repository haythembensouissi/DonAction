import React from 'react';
import defaultImage from '../assets/téléchargé.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card  bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 justify-content-center" style={{ maxWidth: "345px" }}>
      <img src={src?src : defaultImage} className="card-img-top news-item-image" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : ""}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
};

export default NewsItem;
