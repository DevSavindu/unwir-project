import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RiPencilLine, RiDeleteBinLine } from 'react-icons/ri'; // Import icons from react-icons
import backgroundImage from '../assets/9794.jpg'


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/users")
      .then((result) => {
        setUsers(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then(() => {
        setUsers(users.filter(user => user._id !== id));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div className="w-3/4 bg-gray-400 rounded p-6 shadow-lg  bg-opacity-50  hover:bg-blue-100 duration-1000 backdrop-blur-lg">
        <Link to="/create" className="bg-gray-600 text-white py-2 px-3 rounded mb-4 inline-block hover:bg-blue-300 duration-300">
          <button>+ Add User</button>
        </Link>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full shadow-md overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.age}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-6">
                      <Link to={`/update/${user._id}`} className="text-blue-600 hover:text-blue-900 mr-2 hover:scale-105 duration-300">
                        <RiPencilLine /> {/* React Icon for update */}
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-900 hover:scale-105 duration-300"
                        onClick={() => handleDelete(user._id)}
                      >
                        <RiDeleteBinLine /> {/* React Icon for delete */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
