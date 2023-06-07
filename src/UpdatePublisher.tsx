import React from 'react';
import SearchAppBar from './AppBar';
import Publisher from './Publisher';
import { Link } from 'react-router-dom';

function UpdatePublisher() {
//     let {id} = useParams();
  return (
    <div>
      <Publisher/>
 {/* <h1>This is product with id {id}</h1> */}
    </div>
  );
}

export default UpdatePublisher;