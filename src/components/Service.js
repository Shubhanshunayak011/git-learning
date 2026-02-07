import React, { useState } from "react";
import "./Service.css";

function Service() {

  const employeeData = [
    { id: 1, name: "Tarun", position: "dev", degree: "mca", exp: "2 year" },
    { id: 2, name: "Chanchal", position: "tester", degree: "mca", exp: "3 year" },
    { id: 3, name: "Surya", position: "dev", degree: "msc", exp: "2 year" },
    { id: 4, name: "Subhanshu", position: "hr", degree: "bca", exp: "4 year" },
    { id: 5, name: "Prateek", position: "tester", degree: "bca", exp: "3 year" },
    { id: 6, name: "Chandani", position: "tester", degree: "msc", exp: "3 year" },
  ];

  const [search, setSearch] = useState("");
  const [degree, setDegree] = useState("");
  const [position, setPosition] = useState("");

  const filteredEmployees = employeeData.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) &&
    (degree === "" || emp.degree === degree) &&
    (position === "" || emp.position === position)
  );

  return (
    <div className="container">

      <h2>Employee Directory</h2>

      {/* Search */}
      <input
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Degree filter */}
      <select onChange={(e) => setDegree(e.target.value)}>
        <option value="">All Degree</option>
        <option value="mca">MCA</option>
        <option value="msc">MSC</option>
        <option value="bca">BCA</option>
      </select>

      {/* Position filter */}
      <select onChange={(e) => setPosition(e.target.value)}>
        <option value="">All Position</option>
        <option value="dev">DEV</option>
        <option value="tester">TESTER</option>
        <option value="hr">HR</option>
      </select>

      {/* Reset */}
      <button onClick={() => {
        setSearch("");
        setDegree("");
        setPosition("");
      }}>
        Reset
      </button>

      {/* Cards */}
      <div className="card-wrapper">
        {
          filteredEmployees.map(emp => (
            <div className="card" key={emp.id}>
              <h3>{emp.name}</h3>
              <p>Position: {emp.position}</p>
              <p>Degree: {emp.degree}</p>
              <p>Experience: {emp.exp}</p>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default Service;
