import React, { useState } from 'react'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';

function DeleteData() {

    const param=useParams();
    const id=param.SzallasId;

    const [deleteItem,setDeleteItem]=useState([]);

    const DeleteItem=()=>{
        axios.delete("https://nodejs.sulla.hu/data/" + id)
        .then(response=>{
            setDeleteItem(response.data)
        })
        .catch(error => console.error('Error deleting item:', error));
    
    }
        

  return (
    <>
    <div>Biztosan szeretné törölni az adatot? {deleteItem.name}</div>
    <NavLink to={"/Login"} className='btn btn-success'onClick={()=>DeleteItem()}>Igen</NavLink>
    <NavLink to={"/Login"} className='btn btn-danger' >Nem</NavLink>
    </>
    )
}

export default DeleteData