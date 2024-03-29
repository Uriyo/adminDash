import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../datatablesource'

import "./datatable.scss"
import {Link} from "react-router-dom";

const DataTable = () => {
  const [data,setData]=useState(userRows);
  
  const handleDelete=(id)=>{
    console.log(`clicked!${id}`)
    setData(data.filter(item=>item.id!==id));
  }
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                {" "}
                <div className="viewButton">View</div>
              </Link>
                <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                  Delete
                </div>
              
            </div>
          );
        },
      },
    ];
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Users
      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable