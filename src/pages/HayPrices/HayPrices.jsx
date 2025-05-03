import React, { useState } from 'react';
import axios from 'axios';
import "./HayPrices.scss";

function App() {
    const [grassType, setGrassType] = useState('JOHNSON');
    const [month, setMonth] = useState('December');
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPrice = async () => {
        setLoading(true);
        setError(null);
        setPrice(null);
        try {
            const response = await axios.get('http://localhost:5000/api/hay/price', {
                params: { grass: grassType, month: month }
            });
            setPrice(response.data.price);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError('Failed to fetch price. Check if backend is running and CORS is enabled.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="background_img">
            <h1 className='hay_prices__title'>Hay Price Calculator</h1>
            <div className='hay_prices'>
                <div className='hay_prices__card'>
                    <label>
                    <h3 className='hay_prices__text'>Grass Type:</h3>
                        <select className='hay_prices__scroll' value={grassType} onChange={(e) => setGrassType(e.target.value)}>
                            <option value="JOHNSON">Johnson</option>
                            <option value="BERMUDA">Bermuda</option>
                            <option value="ALFALFA">Alfalfa</option>
                        </select>
                    </label>
                    <label>
                    <h3 className='meat_prices__text'>Month:</h3>
                        <select className='hay_prices__scroll' value={month} onChange={(e) => setMonth(e.target.value)}>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </label>
                    <button className='hay_prices__button' onClick={fetchPrice} disabled={loading}>
                        {loading ? 'Loading...' : 'Get Price'}
                    </button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
            {price !== null && !error && <div className='meat_prices__text'>The price for a bale of {grassType} grass in {month} is: ${price}</div>}
                </div>
            </div>
            
        </div>
    );
}

export default App;