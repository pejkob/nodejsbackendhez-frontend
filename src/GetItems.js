import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function GetItems() {

  
    const [items,SetItems]=useState([])

      const url="http://nodejs.sulla.hu/data";
      useEffect(() => {
        axios.get(url)
          .then(response => SetItems(response.data))
          .catch(error => console.error('Hiba a lekérdezés során:', error));
      }, []);

      const Cardmap = items.map((data, index) => {
        return (
            <NavLink key={index} to={"/get/:SzallasId"+data.id}>

           
          <div  className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{data.hostname}</h6>
              <p className="card-text">{data.location}</p>
              <p className="card-text">{data.price}</p>
              <p className="card-text">{data.minimum_nights}</p>
            </div>
          </div>
          </NavLink>
        );
      });
      
  return (
    <>
    {Cardmap}
    </>
  )
}

export default GetItems