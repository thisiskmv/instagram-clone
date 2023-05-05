import React from 'react';
import {MdOutlineCall} from 'react-icons/md';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import {RxInfoCircled} from 'react-icons/rx';
import Messages from './Messages';
import Input from './Input';

function Chat(props) {
    return (
        <div className="chat">
            <div className="userInfo">
                <span>User</span>
                <div className="chatIcons">
                    <MdOutlineCall style={{padding:"0 0rem",fontSize:"1.7rem"}} />
                    <AiOutlineVideoCamera style={{padding:"0 1.2rem",fontSize:"1.7rem"}} />
                    <RxInfoCircled style={{padding:"0 0rem",fontSize:"1.7rem"}} />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}

export default Chat;