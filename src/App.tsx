import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PublisherPage from "./PublisherPage";
import UpdatePublisher from "./UpdatePublisher";
import NotFound from "./NotFound";
import CreatePublisher from "./CreatePublisher";
import DeletePublisher from "./DeletePublisher";
import PublisherDetails from "./PublisherDetails";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const jwt = localStorage.getItem("jwt");
  return jwt !== null; // Return true if JWT token exists in localStorage
};
function App() {
  return (
    <>
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
            <Link to="/publisher/create">Create Publisher</Link>
          </li>
          <li>
            <Link to="/publisher/read">Publisher Details</Link>
          </li>
          <li>
            <Link to="/publisher/update/">Update Publisher</Link>
          </li>
          <li>
            <Link to="/publisher/delete/">Delete Publisher</Link>
          </li>
        </ul>
      </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
            
              <Route path="/publisher" element={<PublisherPage />} />
              <Route path="/publisher/create" element={<CreatePublisher />} />
              <Route path="/publisher/read/:id" element={<PublisherDetails />} />
              <Route path="/publisher/update/" element={<UpdatePublisher />} />
              <Route path="/publisher/delete/:id" element={<DeletePublisher />} />
           
          <Route path="*" element={<NotFound />} />
        </Routes>
     </>
  );
}

export default App;
