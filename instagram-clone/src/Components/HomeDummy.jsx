import React from 'react';
import LeftSidebar from './LeftSidebar';
import Chat from './Chat';
import RightSidebar from './RightSidebar';
import Post from '../Post/Post'

function HomeDummy(props) {
    return (
        <div id="home-container" style={{backgroundColor:"black"}}>
            <div className="home-child-container">
                <LeftSidebar />
                <RightSidebar/>
                <Chat/>

            </div>
        </div>
    );
}

export default HomeDummy;