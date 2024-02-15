import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function GetItems(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://nodejs.sulla.hu/data");
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [items]);

    const Cardmap = items.map((data, index) => (
        <div key={index} className="card" style={{ float: "left", margin: '10px', width: '18rem' }}>
            <NavLink to={"/get/" + data.id}>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{data.hostname}</h6>
                    <p className="card-text">{data.location}</p>
                    <p className="card-text">{data.price}</p>
                    <p className="card-text">{data.minimum_nights}</p>
                </div>
            </NavLink>
            {props.loggedIn ? <NavLink className='btn btn-warning' to={"/put/" + data.id}>Módosítás</NavLink> : null}
            {props.loggedIn ? <NavLink className='btn btn-danger' to={"/delete/" + data.id}>Törlés</NavLink> : null}
        </div>
    ));

    return (
        <>
            {props.loggedIn ? <NavLink className="btn btn-success" to={"/post"}>Új</NavLink> : null}
            <div className='col-md-11 mx-auto'>
                {Cardmap}
            </div>
        </>
    );
}

export default GetItems;
