import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqGetadminbyid = async (id) => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.get(`http://localhost:5000/api/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
