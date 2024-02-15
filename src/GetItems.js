import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import GetItemsById from './GetItemsById';

function GetItems(props) {
    const [items, SetItems] = useState([]);

    const onEditClick = (index) => {
        <GetItemsById loggedIn={props.loggedIn} index={index}></GetItemsById>;
    };

    const onDeleteClick = (index) => {
        axios.delete("https://nodejs.sulla.hu/data/" + index)
            .then(response => {
                const updatedItems = items.filter(item => item.id !== index); // Filtering out the deleted item
                SetItems(updatedItems);
            })
            .catch(error => console.error('Error deleting item:', error));
    };

    const url = "http://nodejs.sulla.hu/data";
    useEffect(() => {
        axios.get(url)
            .then(response => SetItems(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const Cardmap = items.map((data, index) => {
        return (
            <div key={index} className="card mx-auto" style={{ display: 'flex', margin: '10px', width: '18rem' }}>
                <NavLink to={"/get/" + data.id}>
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{data.hostname}</h6>
                        <p className="card-text">{data.location}</p>
                        <p className="card-text">{data.price}</p>
                        <p className="card-text">{data.minimum_nights}</p>
                    </div>
                </NavLink>
                {props.loggedIn ? <button onClick={() => onEditClick(index)}>Módosítás</button> : <></>}
                {props.loggedIn ? <button onClick={() => onDeleteClick(data.id)}>Törlés</button> : <></>}
            </div>
        );
    });

    return (
        <>
            {props.loggedIn ? <NavLink className={"btn btn-success"} to={"/new"}>Új</NavLink> : <></>}
            {Cardmap}
        </>
    );
}

export default GetItems;
