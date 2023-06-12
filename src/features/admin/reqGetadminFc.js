import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqGetadminFc = async () => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.get(`http://localhost:5000/api/admin`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
