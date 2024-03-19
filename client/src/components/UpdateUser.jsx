import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  // Function to fetch user data and set state variables
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getUser"); // Assuming this endpoint fetches user data
      const userData = response.data; // Assuming the response contains user data in the expected format
      setName(userData.name);
      setEmail(userData.email);
      setAge(userData.age);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/createUser", { name, email, age });
      console.log(result);
      navigate('/users', { state: { name } }); // Pass name data when redirecting
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-white  backdrop-filter backdrop-blur-lg">
        <div className="bg-gray-400 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-6 w-96"> 
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update Member Details
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='flex items-flex gap-8'>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-[200px] rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                  Age
                </label>
                <div className="mt-2">
                  <input
                    id="age"
                    name="age"
                    type="text"
                    autoComplete="off"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-30 justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600  duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
