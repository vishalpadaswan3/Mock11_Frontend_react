import React from 'react';

const DataCard = ({ data, onDelete }) => {
  const handleDelete = async () => {
    try {
        let id = data._id;
        const response = await fetch(`https://mock11-backend-app.onrender.com/api/delete/${id}`, {
            method: "DELETE",
        });
        let res = await response.json();
        onDelete(id);
        alert(res.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="data-card">
      <h3>{data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Destination: {data.destination}</p>
      <p>No. of travellers: {data.travellers}</p>
      <p>Budget per person: {data.budget}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DataCard;
