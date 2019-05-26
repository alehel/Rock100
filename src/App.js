import React from 'react';
import {THEME_PRIMARY_COLOR} from "./global_constants/style";
import {StyleRoot} from 'radium';
import AppRoutes from './AppRoutes';

function App() {
    return (
        <StyleRoot>
            <div style={style}>
                <AppRoutes/>
            </div>
        </StyleRoot>

    );
}

const style = {
    backgroundColor: THEME_PRIMARY_COLOR,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

export default App;
