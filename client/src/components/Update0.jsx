import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'; // Import Box component from Material-UI

const UpdateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then((result) => {
        const userData = result.data;
        setName(userData.name);
        setEmail(userData.email);
        setAge(userData.age);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age });
      navigate('/users');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 bg-opacity-50 rounded-lg shadow-lg p-6">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Update User Details
        </h2>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' }, // Adjusted width to full width
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Full Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' }, // Adjusted width to full width
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              label="Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' }, // Adjusted width to full width
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="age"
              label="Age"
              variant="standard"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-48 justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
