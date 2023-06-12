import axios from "axios";

export const reqLogin = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/api/login", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
