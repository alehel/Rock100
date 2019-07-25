import React from 'react';
import albumList from "../../Albums";
import AlbumDetails from "../AlbumDetails/AlbumDetails";
import {musicBrowserContainer, title, covers} from './MusicBrowser.module.scss';

const MusicBrowser = ({spotifyAPI}) => {
    return (
        <div className={musicBrowserContainer}>
            <h1 className={title}>Rock 100</h1>
            <div className={covers}>
                {albumList.map(album => {
                    return <AlbumDetails
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