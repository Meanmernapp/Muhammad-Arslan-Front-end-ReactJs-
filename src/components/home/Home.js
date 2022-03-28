import React from "react";
import Styles from "./home.module.css";
const Home = ({ data }) => {
  const { results } = data;
  console.log(results);
  return (
    <div className={Styles.tableContainer}>
      <table className={Styles.customers}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Picture</th>
        </tr>
        <tr>
          <td>
            {results &&
              `${results[0].name.title} ${results[0].name.first} ${results[0].name.last}`}
          </td>
          <td>{results && results[0].email}</td>
          <td>{results && results[0].dob.age}</td>
          <td>{results && results[0].gender}</td>
          <td>
            {results &&
              `${results[0].location.street.name} 
    ${results[0].location.street.number},
    ${results[0].location.city},
    ${results[0].location.state},
    ${results[0].location.country},
    `}
          </td>
          <td>
            {results &&
              `Phone: ${results[0].phone} | Cell: ${results[0].phone}`}
          </td>
          <td>
            <img
              src={results && results[0].picture.thumbnail}
              width="70"
              height="70"
              alt=""
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
