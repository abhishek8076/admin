import React from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsIconOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <div className='wrapper'>
                    <div className='search'>
                        <input type="text" placeholder='Search' />

                        <SearchOutlinedIcon />

                    </div>
                    <div className='items'>
                        <div className="item">
                            <LanguageOutlinedIcon className='icon' />
                            English
                        </div>

                        <div className="item">
                            <DarkModeOutlinedIcon className='icon' />
                        </div>
                        <div className="item">
                            <FullscreenExitOutlinedIcon className='icon' />
                        </div>
                        <div className="item">
                            <ChatBubbleOutlineOutlinedIcon className='icon' />
                        </div>
                        <div className="item">
                           <NotificationsIconOutlinedIcon className="icon"/>
                        </div>
                        <div className="item">
                            <FormatListBulletedOutlinedIcon className='icon' />
                        </div>
                        <div className="item">
                          <img 
                          src="https://www.w3schools.com/howto/img_avatar.png"
                          alt=""
                          className='avtar'
                          />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
