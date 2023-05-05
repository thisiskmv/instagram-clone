import React from 'react';

function Message(props) {
    return (
        <div className='message owner'>
            {/* <h3>Message</h3> */}
            <div className="messageInfo">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
                {/* <span>Just Now</span> */}
            </div>
            <div className="messageContent">
                <p>Hello...</p>
                {/* <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="2ndperson" /> */}
            </div>
        </div>
    );
}

export default Message;