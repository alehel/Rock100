import React from 'react';
import {THEME_PRIMARY_COLOR} from "../../global_constants/style";
import albumList from "./assets/Albums";
import Album from "./view/Album";


const MusicBrowser = ({spotifyAPI}) => {
    return (
        <div style={styles.content}>
            {albumList.map(album => {
                return <Album
                        key={album.listPosition}
                        artist={album.artist}
                        title={album.album}
                        uri={album.uri}
                        player={spotifyAPI}/>
            })}
        </div>
    );
}

const styles = {
    content: {
        flex: 1,
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: '1rem',
        backgroundColor: THEME_PRIMARY_COLOR,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'row',
    }
}

export default MusicBrowser;