import logo from "./logo.svg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import UserCards from "./components/UserCards";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Users
          </Button>
          <Button color="inherit" onClick={() => navigate("/adduser")}>
            Add User
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<UserCards />} />
        <Route path="/users/edit/:userid" element={<EditUser />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
