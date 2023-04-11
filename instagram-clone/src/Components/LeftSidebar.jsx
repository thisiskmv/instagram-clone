import React from 'react';
import {FaSistrix} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {BiMoviePlay,BiUser} from 'react-icons/bi'
import {RiMessengerLine} from 'react-icons/ri';
import {FiHeart} from 'react-icons/fi'
import {TbSquareRoundedPlus} from 'react-icons/tb'
import {RxHamburgerMenu} from 'react-icons/rx'


function LeftSidebar(props) {
    return (
        <div id="left-container">
            <div>
                {/* <h3>left sidebar(logo)</h3> */}
                <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Dark-Background-Logo.wine.svg" alt="" />
            </div>

            <div className='left-sidebar-options'>
                <div>
                    <div><AiFillHome style={{padding:"0 10px",fontSize:"28px"}} /></div>
                    <h3> Home</h3>
                </div>
                <div>
                    <div><FaSistrix style={{padding:"0 10px",fontSize:"30px"}}/></div>
                    <h3>Search</h3>
                </div>
                <div>
                    <div><MdOutlineExplore style={{padding:"0 10px",fontSize:"28px"}} /></div>
                    <h3>Explore</h3>
                </div>
                <div>
                    <div><BiMoviePlay style={{padding:"0 10px",fontSize:"28px"}} /></div>
                    <h3>Reels</h3>
                </div>
                <div>
                    <div><RiMessengerLine style={{padding:"0 10px",fontSize:"28px"}} /></div>
                    <h3>Messages</h3>
                </div>
                <div>
                    <div><FiHeart style={{padding:"0 10px",fontSize:"26px"}} /></div>
                    <h3>Notifications</h3>
                </div>
                <div>
                    <div><TbSquareRoundedPlus style={{padding:"0 10px",fontSize:"28px"}} /></div>
                    <h3>Create</h3>
                </div>
                <div>
                    <div><BiUser style={{padding:"0 10px",fontSize:"26px"}} /></div>
                    <h3>Profile</h3>
                </div>
                <div>
                    <div><RxHamburgerMenu style={{padding:"0 10px",fontSize:"26px"}} /></div>
                    <h3>More</h3>
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;