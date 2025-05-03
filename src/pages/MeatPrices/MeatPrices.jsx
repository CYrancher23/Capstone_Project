import React, { useState } from 'react';
import axios from 'axios';
import "./MeatPrices.scss";

function MeatPrices() {
    const [packagingType, setPackagingType] = useState('QUARTER');
    const [month, setMonth] = useState('May');
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPrice = async () => {
        setLoading(true);
        setError(null);
        setPrice(null);
        try {
            const response = await axios.get('http://localhost:5000/api/meat/price', {
                params: { packaging: packagingType, month: month }
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
            <h1 className='meat_prices__title'>Meat Price Calculator</h1>
            <div className='meat_prices'>
                <div className='meat_prices__card'>
                    <label>
                        <h3 className='meat_prices__text'>Packaging Type:</h3>
                        <select className='meat_prices__scroll' value={packagingType} onChange={(e) => setPackagingType(e.target.value)}>
                            <option value="QUARTER">Quarter</option>
                            <option value="HALF">Half</option>
                            <option value="WHOLE">Whole</option>
                        </select>
                    </label>
                    <label>
                    <h3 className='meat_prices__text'>Month:</h3>
                        <select className='meat_prices__scroll' value={month} onChange={(e) => setMonth(e.target.value)}>
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
                    <button className='meat_prices__button' onClick={fetchPrice} disabled={loading}>
                        {loading ? 'Loading...' : 'Get Price'}
                    </button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {price !== null && !error && <div className='meat_prices__text'>The price per {packagingType} in {month} is: ${price}</div>}
                </div> 
            </div>
        </div>

    );
}

export default MeatPrices;