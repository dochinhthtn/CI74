import React from "react";
import MangaContainer from "./MangaContainer";

const MANGA_LIST_STYLE = {
    display: 'flex', 
    gap: '20px', 
    flexWrap: 'wrap'
};

export default function MangaList({data}) {

    return (<div className="manga-list" style={MANGA_LIST_STYLE}>
        {data.map(item => {
            return <MangaContainer
                key={item.name}
                name={item.name}
                photo={item.photo}
                viewCount={item.view_count}
                commentCount={item.comment_count}
                latestChapter={item.latest_chapter}
                dateModified={item.date_modified}
            />
        })}
    </div>);
}