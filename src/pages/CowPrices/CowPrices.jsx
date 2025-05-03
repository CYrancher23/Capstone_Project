import React, { useState } from 'react';
import axios from 'axios';
import "./CowPrices.scss";

function CowPrices() {
    const [cowType, setCowType] = useState('Angus');
    const [month, setMonth] = useState('May');
    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchPrice = async () => {
        setLoading(true);
        setError(null);
        setPrice(null);
        try {
            const response = await axios.get('http://localhost:5000/api/cow/price', {
                params: { cow: cowType, month: month }
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
            <h1 className='cow_prices__title'>Cow Price Calculator</h1>
            <div className='cow_prices'>
                <div className='cow_prices__card'>
                    <label>
                    <h3 className='cow_prices__text'>Cow Breed:</h3>
                        <select className='cow_prices__scroll' value={cowType} onChange={(e) => setCowType(e.target.value)}>
                            <option value="ANGUS">Angus</option>
                            <option value="BRAHMAN">Brahman</option>
                            <option value="LONGHORN">Longhorn</option>
                        </select>
                    </label>
                    <label>
                    <h3 className='cow_prices__text'>Month:</h3>
                        <select className='cow_prices__scroll' value={month} onChange={(e) => setMonth(e.target.value)}>
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
                    <button className='cow_prices__button' onClick={fetchPrice} disabled={loading}>
                        {loading ? 'Loading...' : 'Get Price'}
                    </button>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {price !== null && !error && <div className='cow_prices__text'>The price per pound for an {cowType} cow in {month} is: ${price}</div>}
                </div>
            </div>
            
        </div>
    );
}

export default CowPrices;