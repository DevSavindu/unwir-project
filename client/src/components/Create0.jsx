import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/9794.jpg";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8082/createUser", {
        name,
        email,
        age,
      });
      console.log(result);
      navigate("/users", { state: { name, email, age } }); // Pass all user data to users page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 bg-opacity-50  hover:bg-blue-100 rounded-lg shadow-lg p-6 blue-100 hover:bg-opacity-70 duration-1000">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900  hover:text-slate-400 duration-1000">
          Add Member
        </h2>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
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
              "& > :not(style)": { m: 1, width: "100%" },
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
              "& > :not(style)": { m: 1, width: "100%" },
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
              className="w-48 justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300 duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
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
