import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './history.css'

const History = () => {
  const [a, seta] = useState([]);
  const location = useLocation();
  const resname = location.state.name;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/fetchhistory/${resname}`)
      .then((request) => {
        seta(request.data);
        console.log(a)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return(
    <>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone no.</th>
          <th>Persons</th>
        </tr>
      </thead>
      <tbody>
        {a.map((item, index) => (
          <tr>
            <td>{item.name}</td>
            <td><a href="">{item.email}</a> </td>
            <td>{item.call}</td>
            <td>{item.persons}</td>
            {/* Add more table cells for your data */}
          </tr>
        ))}
      </tbody>
      </table>
    </>
  ); 
};

export default History;
