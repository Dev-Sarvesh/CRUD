Simple CRUD Operation By using HTML and JAVASCRIPT.

How To create CRUD by using REACT Here The Demo:

import React, { useState } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    empCode: '',
    salary: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      if (formData.fullName !== '') {
        setEmployees([formData, ...employees]);
        setFormData({
          fullName: '',
          empCode: '',
          salary: '',
          location: ''
        });
      }
    }
  };

  const handleEdit = (index) => {
    const employee = employees[index];
    setFormData(employee);
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const validation = () => {
    return formData.fullName !== '';
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>EMP Code</th>
            <th>Salary</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.fullName}</td>
              <td>{employee.empCode}</td>
              <td>{employee.salary}</td>
              <td>{employee.location}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name*</label>
          <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
          <label className="validation-error hide" id="fullNameValidationError">This Field is Mandatory</label>
        </div>
        <div>
          <label>EMP Code</label>
          <input type="text" value={formData.empCode} onChange={(e) => setFormData({ ...formData, empCode: e.target.value })} />
        </div>
        <div>
          <label>Salary</label>
          <input type="text" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
        </div>
        <div className="form-action-buttons">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;

