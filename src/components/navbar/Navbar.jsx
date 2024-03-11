import React, { useContext } from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';

import "./navbar.scss"

//Acessing the dark mode context
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {
  const {dispatch}=useContext(DarkModeContext);
  
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='heading'>Products</div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/> 
          </div>
          <div className="item">
            <SplitscreenOutlinedIcon className='icon'/> 
          </div>
          <div className="item">
            <SettingsOutlinedIcon className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar