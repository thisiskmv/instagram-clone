import React from 'react';
import LeftSidebar from './LeftSidebar';
import Chat from './Chat';
import RightSidebar from './RightSidebar';
function HomeDummy(props) {
    return (
        <div id="home-container" style={{backgroundColor:"black"}}>
            <div className="home-child-container">
                <LeftSidebar />
                <Chat/>
                <RightSidebar/>
                {/* <span>This is Home</span> */}
            </div>
        </div>
    );
}

export default HomeDummy;