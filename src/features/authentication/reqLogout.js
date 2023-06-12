import axios from "axios";

export const reqLogout = async () => {
  try {
    const response = await axios.delete("http://localhost:5000/api/logout");
    return response.data;
  } catch (error) {
    throw error;
  }
};
