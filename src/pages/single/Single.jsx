import React from 'react'

import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/11131706/pexels-photo-11131706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email </span>
                  <span className="itemValue">janeDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone </span>
                  <span className="itemValue">+91 9636710195 </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address </span>
                  <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country </span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title={"Company's Last 6 months Spending"}/>
          </div>
        </div>
        <div className="bottom">
          <List/>
        </div>
        
      </div>
    </div>
  );
}

export default Single