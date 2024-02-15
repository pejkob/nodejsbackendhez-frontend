import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function GetItemsById(props) {

  console.log(props.loggedIn);
  const param = useParams();
  const id = param.SzallasId;
  console.log(id);
  const [szallas, setSzallas] = useState([]);

  const url = "http://nodejs.sulla.hu/data/" + id;
  useEffect(() => {
    axios.get(url)
      .then(response => setSzallas(response.data))
      .catch(error => console.error('Hiba a lekérdezés során:', error));
  }, []);

  return (
    <>
      {props.loggedIn ? (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <input type="text" value={szallas.name} />
            <input type="text" value={szallas.hostname} />
            <input type="text" value={szallas.location} />
            <input type="text" value={szallas.price} />
            <input type="text" value={szallas.minimum_nights} />
          </div>
        </div>
      ) : (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{szallas.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{szallas.hostname}</h6>
            <p className="card-text">{szallas.location}</p>
            <p className="card-text">{szallas.price}</p>
            <p className="card-text">{szallas.minimum_nights}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default GetItemsById;
