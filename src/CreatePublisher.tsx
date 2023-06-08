import { useState } from "react";
import PublisherService from "./Service/PublisherService";

function CreatePublisher() {
  const [publisherName, setPublisherName] = useState("");
  const [incorporationDate, setIncorporationDate] = useState("");

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newPublisher = {
      publisher_name: publisherName,
      incorporation_date: incorporationDate,
    };

    PublisherService()
      .createDataInDB(newPublisher)
      .then(() => {
        window.location.href = "/Publisher";
      });
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
      <button type="submit">Create Publisher</button>
    </form>
  );
}

export default CreatePublisher;
