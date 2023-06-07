import React, { useEffect } from 'react';
import Publisher from './Publisher';
import PublisherService from './Service/PublisherService';

function PublisherPage() {

  useEffect(() => {
      PublisherService().getAllDataFromDB().then( response => {
        console.log(response)
      })
  }, [])

  return (
    <div>
      <Publisher/>
      <Publisher/>
      <Publisher/>
    </div>
  );
}

export default PublisherPage;