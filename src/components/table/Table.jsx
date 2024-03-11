import React, { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  ArchiveOutlinedIcon, DeleteOutlineOutlinedIcon, SearchOutlinedIcon
} from '../../utils/utils';
import "./table.scss"
import {initialRows} from '../../utils/list';
import { memberImages } from '../../utils/utils';
import { Link } from 'react-router-dom';

const List = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [rows, setRows] = useState(initialRows);  
  const [noResult,setNoResult]=useState(false);
  const [selectedItems,setSelectedItems]=useState([]);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterRows(event.target.value);
  };
  const handleDelete=()=>{
    const updatedRows=rows.filter(row=> !selectedItems.includes(row.id));
    setRows(updatedRows);
    setSelectedItems([]);
  }
  const handleCheckboxChange=(event,id)=>{
    const isChecked=event.target.checked;
    if(isChecked){
      setSelectedItems([...selectedItems,id]);
    }else{
      setSelectedItems(selectedItems.filter(item=>item!==id))
    }
  }
  const filterRows = (query) => {
    const filteredRows = initialRows.filter(row =>
      row.product.toLowerCase().includes(query.toLowerCase()) ||
      row.customer.toLowerCase().includes(query.toLowerCase()) ||
      row.category.toLowerCase().includes(query.toLowerCase()) ||
      row.tag.toLowerCase().includes(query.toLowerCase()) ||
      row.status.toLowerCase().includes(query.toLowerCase())
    );
    setRows(filteredRows);
    setNoResult(filteredRows.length === 0 && query !== '');
  };        
    return ( 
      <div style={{display:"flex", flexDirection:'column', alignItems:'flex-end'}}>
        <div className="search" style={{padding:'15px', display:'flex',borderRadius:'5px'}}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <SearchOutlinedIcon className='icon'/>
        </div>
      
        <TableContainer component={Paper} className='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell className='tableCell'>ID</TableCell>
              <TableCell className='tableCell'>Brand</TableCell>
              <TableCell className='tableCell'>Description </TableCell>
              <TableCell className='tableCell'>Members </TableCell>
              <TableCell className='tableCell'>Categories </TableCell>
              <TableCell className='tableCell'>Tags </TableCell>
              <TableCell className='tableCell'>Next meeting </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {noResult ?(
                 <TableRow>
                 <TableCell colSpan={7} className='noResultsCell'>
                   No results found
                 </TableCell>
               </TableRow>
            ):(
            rows.map((row) => (
              <TableRow
                key={row.id}
              >
                 <TableCell className='tableCell'>
                  <Checkbox color="primary" 
                     checked={selectedItems.includes(row.id)}
                     onChange={(event) => handleCheckboxChange(event, row.id)}
                  />
                  {row.id}
                </TableCell>
                <TableCell className='tableCell'>
                    <div className="cellWrapper">
                        {/* <img src={row.img} alt='pic' className='image' /> */}
                        {row.img}
                        {row.product}
                    </div>
                </TableCell>
                <TableCell className='tableCell'>{row.customer}</TableCell>
                <TableCell className='tableCell'>
                
                <Link to='/users/test'>
                <div className="memberImagesWrapper">
                                    {memberImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`member-${index}`}
                                            className="memberImage"
                                        />
                                    ))}
                </div>
                </Link>
                  
                </TableCell>
                <TableCell className='tableCell'>
                    <span className={`category ${row.category}`}>{row.category}</span>
                </TableCell>
                <TableCell className='tableCell'>
                    <span className='tags'>{row.tag}</span>
                </TableCell>
                <TableCell className='tableCell'>
                   <span className={`status ${row.status}`}> {row.status}</span>
                </TableCell>
              </TableRow>
            ))
          )}
          </TableBody>
        </Table>
        <div style={{display:"flex", justifyContent:'center'}}>
          <div style={{display:'flex', marginTop:"25px" , marginBottom:'25px'}}>
          <button className='btn'>Selected 1 </button>
          <button className='btn'>
          <div style={{ display:'flex',alignItems:'center', justifyContent:'center'}}>
            <ArchiveOutlinedIcon/>
            Archive
          </div>
          </button>
          <button className='btn' onClick={handleDelete}>
            <div style={{ display:'flex',alignItems:'center', justifyContent:'center', color:'red'}}>
            <DeleteOutlineOutlinedIcon/>
            Delete
            </div>
          </button>
          <button className='btn'>
          <div >
            More ▾
          </div>
          </button>
          
          </div>
        </div>
      </TableContainer>
    </div>   
  )
}

export default List;