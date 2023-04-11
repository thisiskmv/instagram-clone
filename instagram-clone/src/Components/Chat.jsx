import React from 'react';
import {MdOutlineCall} from 'react-icons/md';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import {RxInfoCircled} from 'react-icons/rx';

function Chat(props) {
    return (
        <div className="chat">
            <div className="userInfo">
                <span>User</span>
                <div className="chatIcons">
                    <MdOutlineCall />
                    <AiOutlineVideoCamera />
                    <RxInfoCircled />
                </div>
            </div>
        </div>
    );
}

export default Chat;