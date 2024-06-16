import React from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <img
             className="header__logo"
             src="./Logo_of_Youtube_(2015-2017).svg.png" 
             alt="Youtube logo" 
            />
            </div>
            <div className="header__input">
            <input placeholder="Search" type="text" />
            <SearchIcon className="header__inputButton" />
            </div>
            <div className="header__icons">
            <VideoCallOutlinedIcon className="header__icon" />
            {/*<AppsIcon className="header__icon" />*/}
            <NotificationsOutlinedIcon className="header__icon" />
            <AccountCircleOutlinedIcon className="header__icon" />
            </div>
        </div>
    );
}

export default Header;