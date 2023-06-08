import React, { useEffect, useState } from "react";
import PublisherService from "./Service/PublisherService";
import { Card } from "@mui/material";
import Publisher from "./Components/Publisher";
import { Navigate } from "react-router-dom";

function nav(id: number) {

  return <Navigate to={`/publisher/create/${id}`}></Navigate>;
}

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
          {data.incorporation_date.toString()}
          <button onClick={() => PublisherService().deleteDataFromDB(Number(data.id))}>Delete</button>
          <button onClick={() => nav(data.id)}>Update</button>
          
        </Card>
      ))}
    </div>
  );
}

export default PublisherPage;
