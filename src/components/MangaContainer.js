import React from 'react';
import "../css/MangaContainer.css";

export default function MangaContainer({ photo, name, viewCount, commentCount, latestChapter, dateModified }) {
    return (<div className="manga-container">
        <div className="manga-photo">
            <img src={photo}/>
            <div className="count">
                <span className="view-count">{viewCount} <i className="fa-solid fa-eye"></i></span>
                <span className="comment-count">{commentCount} <i className="fa-solid fa-comment"></i></span>
            </div>
        </div>
        <div className="manga-info">
            <b className="manga-name">{name}</b>
            <div className="manga-release">
                <span className="latest-chapter">Chapter: {latestChapter}</span>
                <span className="date-modified">Date: {dateModified}</span>
            </div>
        </div>
    </div>);
}