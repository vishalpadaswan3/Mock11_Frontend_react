import React, { useState } from 'react';


const PostForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [destination, setDestination] = useState('');
    const [travellers, setTravellers] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let payload = {
                name,
                email,
                destination,
                travellers,
                budget,
            }
            
            const response = await fetch("https://mock11-backend-app.onrender.com/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            let res = await response.json();
            alert(res.message);

            // Clear form after successful submission
            setName('');
            setEmail('');
            setDestination('');
            setTravellers('');
            setBudget('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Email Address:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Destination:
                <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                >
                    <option value="">Select a destination</option>
                    <option value="India">India</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="America">America</option>
                </select>
            </label>
            <br />
            <label>
                No. of travellers:
                <input
                    type="number"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Budget Per Person:
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostForm;
