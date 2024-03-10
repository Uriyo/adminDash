import React, { useState } from 'react'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";

const New = ({inputs,title}) => {
  const [file,setFile]=useState("");
  console.log(file);
  return (
    <div className='new'>
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file? URL.createObjectURL(file):
                "https://images.pexels.com/photos/11131706/pexels-photo-11131706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="" />
            </div>
            <div className="right">
              <form action="">
              <div className="formInput">
                  <label htmlFor='file'>
                    Image <FileUploadOutlinedIcon className='icon'/></label>
                  <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}} />
                </div>
                {inputs.map((input)=>
                
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div> 
                
                )}
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New