import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'/dashboard'} element={<Dashboard/>}/>
        <Route path="/logowanie" element={<Login/>}/>
        <Route path="/rejestracja" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
