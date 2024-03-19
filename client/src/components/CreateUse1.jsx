import React, { useState } from 'react';
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
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-400 bg-opacity-50 rounded-lg shadow-lg p-6">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Add Member
        </h2>

        <form onSubmit={Submit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder='full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder='you@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="text"
              autoComplete="off"
              required
              placeholder='age'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

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

export default CreateUser;
