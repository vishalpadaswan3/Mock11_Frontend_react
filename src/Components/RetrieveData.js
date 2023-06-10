import React, { useEffect, useState } from 'react';
import "../App.css"
import DataCard from './DataCard';



const RetrieveData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://mock11-backend-app.onrender.com/api/retrieve");
                let arr = await response.json();

                setData(arr.posts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = (id) => {
        setData((prevData) => prevData.filter((item) => item._id !== id));
    };

    const filterfunction = async (e) => {
        try {
            let destination = e.target.value;
            const response = await fetch(`https://mock11-backend-app.onrender.com/api/filter/${destination}`);
            let arr = await response.json();
            setData(arr.posts);
        } catch (error) {
            console.error(error);
        }
    };

    const sortfunction = async (e) => {
        try {
            let sort = e.target.value;
            const response = await fetch(`https://mock11-backend-app.onrender.com/api/sort/${sort}`);
            let arr = await response.json();
            setData(arr.posts);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="toptable">
                <div className="filterpart">
                    <label className='some1'>
                        Destination:
                        <select className='filtervalue' onChange={filterfunction}>
                            <option value="All">Select a destination</option>
                            <option value="India">India</option>
                            <option value="Africa">Africa</option>
                            <option value="Europe">Europe</option>
                            <option value="America">America</option>
                        </select>
                    </label>
                </div>
                <div className="sortpart">
                    <label className='some1' onChange={sortfunction}> Sort by:
                        <select className='sortvalue'>
                            <option value="All">Select a Budget</option>
                            <option value="HL">High to Low</option>
                            <option value="LH">Low to High</option>
                        </select>
                    </label>
                </div>
            </div>

            <h1>Total Available travellers : {data.length}</h1>
            <div className="data-container">
                {data.map((item) => (
                    <DataCard key={item._id} data={item} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default RetrieveData;
