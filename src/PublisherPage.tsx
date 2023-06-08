import React, { useEffect, useState } from "react";
import PublisherService from "./Service/PublisherService";
import { Card } from "@mui/material";
import Publisher from "./Components/Publisher";

function PublisherPage() {
  const [responseData, setResponseData] = useState<Publisher[]>([]);

  useEffect(() => {
    PublisherService()
      .getAllDataFromDB()
      .then((data) => {
        setResponseData(data);
      });
  }, []);

  return (
    <div>
      {responseData.map((data: Publisher) => (
        <Card key={data.id}>
          {data.publisher_name}
          <br></br>
          {data.incorporation_date.toString()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => PublisherService().deleteDataFromDB(Number(data.id))}
          >
            Delete
          </button>
        </Card>
      ))}
    </div>
  );
}

export default PublisherPage;
