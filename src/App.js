import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Upload from './pages/Upload/Upload';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/login" /> : <Home />} />
          <Route path="/register" element={user ? <Navigate to="/login" /> : <Register />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/upload" element={user ? <Navigate to="/login" /> : <Upload />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
