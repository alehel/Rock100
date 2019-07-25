import React from 'react';
import albumList from "../../Top100List";
import AlbumDetails from "../AlbumDetails/AlbumDetails";
import {covers, musicBrowserContainer, title} from './MusicBrowser.module.scss';

const MusicBrowser = ({musicService}) => {
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
            musicService={musicService}/>
        })}
      </div>
    </div>
  );
};

export default MusicBrowser;