import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import TambahUser from "./components/tambahUser"
import Navbar from "./components/Navbar";
import UpdateUser from "./components/UpdateUser";


function App() {
  return (
    <div>
      <div>
      <Navbar />
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/tambah" element={<TambahUser/>}/>
          <Route path="/update/:id" element={<UpdateUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
