import React from 'react';
import SearchAppBar from './AppBar';
import Publisher from './Publisher';
import { Link } from 'react-router-dom';

function PublisherDetailPage() {
//     let {id} = useParams();
  return (
    <div>
      <SearchAppBar/>
      <Publisher/>
 {/* <h1>This is product with id {id}</h1> */}
 <Link to="/">home</Link>
 <Link to="/publisher">PublisherPage</Link>
 <Link to="/details">PublisherDetailPage</Link>
 <Link to="/login">Login</Link>
    </div>
  );
}

export default PublisherDetailPage;