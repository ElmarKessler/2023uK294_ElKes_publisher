import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PublisherPage from "./PublisherPage";
import UpdatePublisher from "./UpdatePublisher";
import NotFound from "./NotFound";
import CreatePublisher from "./CreatePublisher";
import PublisherDetails from "./PublisherDetails";

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
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/publisher" element={<PublisherPage />} />
        <Route path="/publisher/create" element={<CreatePublisher />} />
        <Route path="/publisher/read/:id" element={<PublisherDetails />} />
        <Route path="/publisher/update/" element={<UpdatePublisher />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
