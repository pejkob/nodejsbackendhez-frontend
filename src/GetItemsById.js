import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GetItemsById(props) {
  const param = useParams();
  const id = param.SzallasId;
  const [szallas, setSzallas] = useState([]);

  const url = "http://nodejs.sulla.hu/data/" + id;
  useEffect(() => {
    axios.get(url)
      .then(response => setSzallas(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
     
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{szallas.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{szallas.hostname}</h6>
            <p className="card-text">{szallas.location}</p>
            <p className="card-text">{szallas.price}</p>
            <p className="card-text">{szallas.minimum_nights}</p>
          </div>
        </div>
      
    </>
  );
}

export default GetItemsById;
