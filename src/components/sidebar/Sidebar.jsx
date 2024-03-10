import React, { useContext } from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const {dispatch}=useContext(DarkModeContext);
    return (
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">DashBoard</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <DashboardIcon className="icon" />
                <span>DashBoard</span>
              </Link>
            </li>
            <li>
              <Link to="/users" style={{ textDecoration: "none" }}>
                <PersonOutlineOutlinedIcon className="icon" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <Inventory2OutlinedIcon className="icon" />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <ListAltOutlinedIcon className="icon" />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <LocalShippingOutlinedIcon className="icon" />
                <span>Delivery</span>
              </Link>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <QueryStatsOutlinedIcon className="icon" />
                <span>Stats</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <NotificationsOutlinedIcon className="icon" />
                <span>Notifications</span>
              </Link>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <HealthAndSafetyOutlinedIcon className="icon" />
                <span>System Health</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <PsychologyOutlinedIcon className="icon" />
                <span>Logs</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <SettingsOutlinedIcon className="icon" />
                <span>Settings</span>
              </Link>
            </li>
            <p className="title">USER</p>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <AccountBoxOutlinedIcon className="icon" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }}>
                <LogoutOutlinedIcon className="icon" />
                <span>Logout</span>
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