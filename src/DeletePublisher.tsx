import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import Publisher from "./Components/Publisher";
import { useParams } from "react-router-dom";

function DeletePublisher() {
  const {id} = useParams()
  const [responseData, setResponseData] = useState<Publisher>();
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

export default DeletePublisher;