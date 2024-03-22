
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateUser from './components/Update0'
import Users from './components/Users'
import CreateUser from './components/Create0'


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
