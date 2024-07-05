import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './Components.css';
import logo from './../assets/logo.svg'

const SidebarComponent = () => {
  return (
    <Menu
      customBurgerIcon={<MenuRoundedIcon />}
      customCrossIcon={false}
      width={'300px'}
      styles={{
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px',
          color: 'white'
        },
        bmBurgerBars: {
          background: 'white'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#232323',
          padding: '2vmax',
          fontSize: '1.15em'
        },
        bmItemList: {
          color: '#EEB572',
          padding: '2em'
        },
        bmItem: {
          display: 'flex',
          color: 'white'
        },
        bmOverlay: {
          background: 'none'
        }
      }}
    >
        <div className="menuItem">
        <img src={logo} alt="" />
      </div>
      <div className="menuItem">
        <HomeIcon />  Home
      </div>
      <div className="menuItem">
        <QuestionMarkIcon /> FAQ
      </div>
    </Menu>
  );
};

export default SidebarComponent;