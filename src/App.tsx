import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Service/Home';
import Login from './Service/Login';
import React from 'react';
import Publisher from './Publisher';
import { AppBar } from '@mui/material';
import SearchAppBar from './AppBar';
import PublisherPage from './PublisherPage';
import PublisherDetailPage from './PublisherDetailPage';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    {/* <SearchAppBar/> */}
  <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/publisher">Publisher</Link>
          </li>
          <li>
            <Link to="/publisher/example">Publisher Detail</Link>
          </li>
        </ul>
      </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="publisher" element={<PublisherPage/>} />
    <Route path="publisher/:name" element={<PublisherDetailPage/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </Router>
  );
}

export default App;
