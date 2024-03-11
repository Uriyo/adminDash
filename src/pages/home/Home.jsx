import React from 'react'

import {  
  SwapVertOutlinedIcon,
  AppsOutlinedIcon,
  TuneOutlinedIcon,
  MeetingRoomOutlinedIcon,
  ImportExportOutlinedIcon
} from "../../utils/utils"
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import  List  from '../../components/table/Table'


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">
            <button>
              <div>
                <AppsOutlinedIcon className="icons" />
                All Brands ▾
              </div>
            </button>
            <button>Desk ▾</button>
            <button>Tags ▾</button>
            <button>
              <div>
                Sort
                <SwapVertOutlinedIcon className="icons" />
              </div>
            </button>
            <button>
              <div>
                Filter
                <TuneOutlinedIcon className="icons" />
              </div>
            </button>
            <div
              style={{
                display: "flex",
                width: "9%",
                paddingLeft: "300px",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MeetingRoomOutlinedIcon />
                Import/Export
              </button>
              <button
                style={{
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ImportExportOutlinedIcon />
                Meeting
              </button>
            </div>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Home