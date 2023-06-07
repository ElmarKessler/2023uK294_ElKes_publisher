import api from "./Api";

const AuthService = () => ({
  login: async (data: any) => {
    const response = await api.post("login", data);
    const jwt = response.data.token; 

    localStorage.setItem("jwt", jwt); // Save the JWT in localStorage

    return response.data;
  },
});

export default AuthService;