import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Auth from '../src/Pages/Auth/Auth'
import Dashboard from '../src/Pages/Dashboard/Dashboard';
import Register from '../src/Pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
