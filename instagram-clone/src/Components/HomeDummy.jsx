import React from 'react';
import LeftSidebar from './LeftSidebar';
import Chat from './Chat';

function HomeDummy(props) {
    return (
        <div id="home-container">
            <div className="home-child-container">
                <LeftSidebar />
                <Chat/>
                {/* <span>This is Home</span> */}
            </div>
        </div>
    );
}

export default HomeDummy;