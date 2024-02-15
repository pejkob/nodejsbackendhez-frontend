import axios from 'axios';
import React, { useState } from 'react';

function NewData() {
    const [formData, setFormData] = useState({
        name: '',
        hostname: '',
        location: '',
        price: '',
        minimum_nights: ''
    });

    const onSubmitClick = async (event) => {
        event.preventDefault(); 

        try {
            const response = await axios.post("http://nodejs.sulla.hu/data", formData);
            console.log(response.data); 
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    return (
        <>
            <form onSubmit={onSubmitClick}>
                <div className="form-group">
                    <label htmlFor="name">Szállás neve:</label>
                    <input type="text" id="name" className="form-control" placeholder="Szállás neve" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="hostname">Hostname:</label>
                    <input type="text" id="hostname" className="form-control" placeholder="Hostname" value={formData.hostname} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Helyszín:</label>
                    <input type="text" id="location" className="form-control" placeholder="Helyszín" value={formData.location} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Ár:</label>
                    <input type="text" id="price" className="form-control" placeholder="Ár" value={formData.price} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="minimum_nights">Minimum éjszakák:</label>
                    <input type="text" id="minimum_nights" className="form-control" placeholder="Minimum éjszakák" value={formData.minimum_nights} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default NewData;
