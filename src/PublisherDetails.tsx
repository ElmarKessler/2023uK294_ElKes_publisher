import Publisher from './Publisher';
import { useEffect } from 'react';
import PublisherService from './Service/PublisherService';


function PublisherDetails() {
  useEffect(() => {
    PublisherService().getAllDataFromDB().then( response => {
      console.log(response)
    })
}, [])
  return (
    <div>
      <Publisher/>
 {/* <h1>This is product with id {id}</h1> */}
    </div>
  );
}

export default PublisherDetails;