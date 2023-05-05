import React from 'react';
import {TbPhoto} from 'react-icons/tb';
import {FiHeart} from 'react-icons/fi';
import {GrEmoji} from 'react-icons/gr';

function Input(props) {
    return (
        <div className="inputdiv">
            <div className='input'>
                <GrEmoji style={{fontSize:"2rem", cursor:"pointer",paddingRight:"1rem"}} />
                <input type="text" placeholder='Message...' />
                <div className="send">
                    <TbPhoto style={{fontSize:"2rem", cursor:"pointer"}} />
                    <input type="file" style={{display:"none"}} id='file' />
                    <lable htmlFor="file">
                    <FiHeart style={{fontSize:"1.8rem",cursor:"pointer"}} />
                    </lable>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Input;