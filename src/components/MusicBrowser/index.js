import React from 'react';
import {THEME_PRIMARY_COLOR} from "../../global_constants/style";
import albumList from "./assets/Albums";


const MusicBrowser = ({albums, spotifyAPI}) => {
    return (
        <div style={styles.content}>
            {albumList.map(album => {
                return <div key={album.listPosition} onClick={() => {spotifyAPI.playTrack(album.uri)}}>{album.album}</div>
            })}
        </div>
    );
}

const styles = {
    content: {
        flex: 1,
        backgroundColor: THEME_PRIMARY_COLOR,
    }
}

export default MusicBrowser;