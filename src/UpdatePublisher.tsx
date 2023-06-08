import { useState } from 'react';
import PublisherService from './Service/PublisherService';

function UpdatePublisher() {
  const [publisherName, setPublisherName] = useState('');
  const [incorporationDate, setIncorporationDate] = useState('');
  const [id, setId] = useState('');

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const updatedPublisher = {
      publisher_name: publisherName,
      incorporation_date: incorporationDate,
      id: id,
    };

    PublisherService().updateDataInDB(updatedPublisher, id)
      .then(() => {
    
        window.location.href = '/Publisher';
      })

  };

  return (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="publisherName">Publisher Name:</label>
            <input
              type="text"
              id="publisherName"
              value={publisherName}
              onChange={(e) => setPublisherName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="incorporationDate">Incorporation Date:</label>
            <input
              type="date"
              id="incorporationDate"
              value={incorporationDate}
              onChange={(e) => setIncorporationDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="id">Id:</label>
            <input
              type="number"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button type="submit">Update Publisher</button>
        </form>
  );
}

export default UpdatePublisher;
