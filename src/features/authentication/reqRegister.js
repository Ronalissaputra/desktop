import axios from "axios";

export const reqRegister = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/api/admin", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
