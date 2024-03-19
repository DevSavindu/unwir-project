import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/createUser", { name, email, age });
      console.log(result);
      navigate('/users', { state: { name } }); // Navigate to users page after successful submission
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 bg-opacity-50 rounded-lg shadow-lg p-6">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Member
        </h2>
      <form onSubmit={Submit} className="mt-10 space-y-6">

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
};

export default CreateUser;
