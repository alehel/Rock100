import React from 'react';
import albumList from "../../Albums";
import Album from "./view/Album";
import './style/style.scss';

const MusicBrowser = ({spotifyAPI}) => {
    return (
        <div className="music-browser-container">
            <h1 className="title">Rock 100</h1>
            <div className="covers">
                {albumList.map(album => {
                    return <Album
                        key={album.listPosition}
                        artist={album.artist}
                        title={album.album}
                        uri={album.uri}
                        player={spotifyAPI}/>
                })}
            </div>
        </div>
    );
}

export default MusicBrowser;