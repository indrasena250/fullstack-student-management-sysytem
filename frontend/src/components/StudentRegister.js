import React, { useState } from 'react';
import { registerStudent } from '../services/studentService';

const StudentRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', classId: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerStudent(form);
      setMessage("Registration Successful");
    } catch (err) {
      setMessage(err.response.data.error || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="number" name="classId" placeholder="Class ID" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StudentRegister;
