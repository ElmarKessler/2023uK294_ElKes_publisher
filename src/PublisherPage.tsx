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
          {data.incorporation_date.toDateString()}
        </Card>
      ))}
    </div>
  );
}

export default PublisherPage;
