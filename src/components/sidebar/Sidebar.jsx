import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import "./sidebar.scss";
import {
  DesignServicesOutlinedIcon,
  GroupsOutlinedIcon,
  CodeOutlinedIcon,
  AddBoxOutlinedIcon,
  HelpOutlineOutlinedIcon,
  FolderOutlinedIcon,
  SettingsEthernetOutlinedIcon,
  PersonOutlineRounded,
}from "../../utils/utils";

import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {

  const [mainItems, setMainItems] = useState([
    { name: 'Products', icon: <FolderOutlinedIcon className='icon' />, id: 1, isOpen: false },
    { name: 'Sales', icon: <FolderOutlinedIcon className='icon' />, id: 2, isOpen: false },
    { name: 'Design', icon: <FolderOutlinedIcon className='icon' />, id: 3, isOpen: false },
    { name: 'Office', icon: <FolderOutlinedIcon className='icon'/>, id: 4, isOpen: false },
    { name: 'Legal', icon: <FolderOutlinedIcon className='icon'/>, id: 5, isOpen: false }
  ]);
  const [topItems, setTopItems] = useState([
    { name: 'Design Team', icon: <DesignServicesOutlinedIcon  className='icon'/>, id: 1,to:"/design"},
    { name: 'Marketing Team', icon: <GroupsOutlinedIcon className='icon'/>, id: 2,to:'/marketing' },
    { name: 'Developer Team', icon: <CodeOutlinedIcon className='icon'/>, id: 3,to:"/developer"},
    { name: 'Sales Team', icon: <GroupsOutlinedIcon className='icon'/>, id: 4,to:"/sales"}
  ]);

  const [showAddtopItemInput, setShowAddtopItemInput] = useState(false);
  const [newTopItemName, setNewTopItemName] = useState('');

  const [showAddItemInput, setShowAddItemInput] = useState(false);
  const [newMainItemName, setNewMainItemName] = useState('');


  const handleAddToplist=()=>{
    if(newTopItemName.trim()!== ''){
      setTopItems([...topItems,{name:newTopItemName,icon:<GroupsOutlinedIcon className='icon'/>, id:Date.now()}]);
      setNewTopItemName('');
      setShowAddtopItemInput(false);
    }
  }

  const handleAddMainItem = () => {
    if (newMainItemName.trim() !== '') {
      setMainItems([...mainItems, { name: newMainItemName, icon: <FolderOutlinedIcon />, id: Date.now(), isOpen: false }]);
      setNewMainItemName('');
      setShowAddItemInput(false);
    }
  };

  const toggleSublist = (id) => {
    setMainItems(mainItems.map(item => item.id === id ? { ...item, isOpen: !item.isOpen } : item));
  };

  const {dispatch}=useContext(DarkModeContext);
    return (
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
            <SettingsEthernetOutlinedIcon style={{marginRight:'5px'}}/>
              InnovateHub
            <div className="item">
            <img 
              src='https://images.pexels.com/photos/11131706/pexels-photo-11131706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              alt='profile pic'
              className='avatar'></img>
              </div>
            </div>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <div className="title">
            
            {topItems.map(item =>(
              <li>
                <Link to={item.to} style={{textDecoration:"none"}}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            {
              showAddtopItemInput &&(
                <form onSubmit={handleAddToplist}>
                  <input
                    style={{ borderRadius: '5px', border: '1px solid gray', marginLeft:"5px" }}
                    type="text"
                    value={newTopItemName}
                    onChange={(e) => setNewTopItemName(e.target.value)}
                  />
                  <button type="submit" style={{color:'white',padding:'5px', margin:'5px 0px 5px 106px', background:'black',borderRadius:'5px'}}>
                        Submit 
                </button>
                </form>
              )
            }
            </div>
            <li onClick={() => setShowAddtopItemInput(!showAddtopItemInput)}>
              <Link style={{ textDecoration: "none" }}>
              <div className='teamcnt' >
                <span className='addTeam'>  Create Team</span>
                <AddBoxOutlinedIcon className="addTeamicon"/>
              </div> 
              </Link>
            </li>
            <br/>
            <ul className='usefuls'>
              {mainItems.map(item => (
                <li key={item.id} onClick={() => toggleSublist(item.id)}>
                  <Link style={{ textDecoration: "none" }}>
                    {item.icon}
                    <span >{item.name}</span>
                    {item.isOpen && (
                      <ul className="sub-list">
                        <li>Roadmap</li>
                        <li>Feedback</li>
                        <li>Office</li>
                      </ul>
                    )}
                  </Link>
                </li>
                ))}
                
                {showAddItemInput && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <form onSubmit={handleAddMainItem}>
                <input 
                  style={{ borderRadius: '5px', border: '1px solid gray', marginLeft:"5px" }}
                  type="text"
                  value={newMainItemName}
                  onChange={(e) => setNewMainItemName(e.target.value)}
                  
                />
                <button type="submit" style={{color:'white',padding:'5px', margin:'5px 0px 5px 106px', background:'black',borderRadius:'5px'}}>
                        Submit 
                </button>
                 </form>
              </div>
              )}
            </ul>
            <button onClick={()=>setShowAddItemInput(!showAddItemInput)} 
                className='subBtn' >
                  <div className='addsub'>
                    <span>
                  Add new sub </span> <AddBoxOutlinedIcon className="addTeamicon"/>
                  </div>
            </button>
            <br/>
            <br/>
            <br/>
          </ul>
            <ul>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <PersonOutlineRounded  className='icon'/>
                <span>Invite Teammates</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <HelpOutlineOutlinedIcon className="icon"/>
                <span>Help and first steps</span>
              </Link>
            </li>
            <li className='trial'>
              <Link style={{textDecoration:"none"}}>
                <span>7 days left
                </span>
                <button className='btn'>Add billing</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    );
}

export default Sidebar