import React, { useEffect, useState } from "react";
import PublisherService from "./Service/PublisherService";
import { Card } from "@mui/material";
import Publisher from "./Components/Publisher";
import { useParams } from "react-router-dom";

function PublisherDetails() {
  const {id} = useParams()
  const [responseData, setResponseData] = useState<Publisher>();

  useEffect(() => {
    PublisherService()
      .getDataFromDB(Number(id))
      .then((response) => {
        setResponseData(response);
      });
  }, []);

  return (
    <div>
    {
      responseData && (
        <Card key={responseData.id}>
        <div>
        {responseData.publisher_name}
        <br></br>
        {responseData.incorporation_date.toString()}
        </div>
      </Card>
      )
    }
</div>
  );
}

export default PublisherDetails;
