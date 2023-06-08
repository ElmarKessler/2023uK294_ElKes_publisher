import api from "./Api";

const PublisherService = () => ({
    getDataFromDB: async (id: number) => {
      const data = await api.get(`publisher/${id}`);
      return data.data;
    },
  
    getAllDataFromDB: async () => {
      const response = await api.get("publisher");
      return response.data;
    },
  
    createDataInDB: async (data: any) => {
      const response = await api.post("publisher/", data);
      return response.data;
    },
  
    updateDataInDB: async (data: any, id: any) => {
      const response = await api.put(`publisher/${id}`, data, id);
      return response.data;
    },
  
    deleteDataFromDB: async (id: any) => {
      const response = await api.delete(`publisher/${id}`);
      return response.data;
    },
  });

  export default PublisherService;