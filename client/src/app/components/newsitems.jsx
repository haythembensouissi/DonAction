import React from 'react';
import defaultImage from '../assets/téléchargé.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div style={{ maxWidth: "345px", width: "100%", display: "inline-block", margin: "10px", textAlign: "center" }}>
      <div className="card bg-dark text-light" style={{ width: "100%", height: "100%" }}>
        <img src={src ? src : defaultImage} className="card-img-top news-item-image" alt="News" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
        <div className="card-body" style={{ padding: "1rem", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <h5 className="card-title" style={{ marginBottom: "0.5rem", maxHeight: "2rem", overflow: "hidden" }}>{title.slice(0, 50)}</h5>
          <p className="card-text" style={{ marginBottom: "1rem", maxHeight: "3rem", overflow: "hidden" }}>{description ? description.slice(0, 90) : ""}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
