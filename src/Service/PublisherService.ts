import api from "./Api";

const PublisherService = () => ({
    getDataFromDB: async (id: number) => {
      const data = await api.get(`publisher/read/${id}`);
      return data["data"][0]["url"]; //Return einzelnes Element von DB
    },
  
    getAllDataFromDB: async () => {
      const response = await api.get("publisher");
      return response.data.map((item: any) => item.url); // Return array von URLs
    },
  
    createDataInDB: async (data: any) => {
      const response = await api.post("publisher/create", data);
      return response.data;
    },
  
    updateDataInDB: async (id: any, data: any) => {
      const response = await api.put(`publisher/update/${id}`, data);
      return response.data;
    },
  
    deleteDataFromDB: async (id: any) => {
      const response = await api.delete(`publisher/delete${id}`);
      return response.data;
    },
  });