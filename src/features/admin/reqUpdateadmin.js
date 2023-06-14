import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqUpdateadmin = async (id, data) => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.patch(
      `http://localhost:5000/api/admin/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
