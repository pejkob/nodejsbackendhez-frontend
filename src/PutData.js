import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { NavLink, Navigate, useParams } from 'react-router-dom'

function PutData() {
    const [item, setItem] = useState({});
    const param = useParams();
    const id = param.SzallasId;

    useEffect(() => {
        axios.get("https://nodejs.sulla.hu/data/" + id)
            .then(response => setItem(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    const onEditClick = () => {
        axios.put("https://nodejs.sulla.hu/data/" + id, item)
           
            .catch(error => console.error('Error updating data:', error));

    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <input type="text" defaultValue={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
                <input type="text" defaultValue={item.hostname} onChange={(e) => setItem({ ...item, hostname: e.target.value })} />
                <input type="text" defaultValue={item.location} onChange={(e) => setItem({ ...item, location: e.target.value })} />
                <input type="text" defaultValue={item.price} onChange={(e) => setItem({ ...item, price: e.target.value })} />
                <input type="text" defaultValue={item.minimum_nights} onChange={(e) => setItem({ ...item, minimum_nights: e.target.value })} />
            </div>
            <NavLink to={"/get-all"}> <button onClick={onEditClick} className='btn btn-primary'>Edit</button></NavLink>
        </div>
    )
}

export default PutData
