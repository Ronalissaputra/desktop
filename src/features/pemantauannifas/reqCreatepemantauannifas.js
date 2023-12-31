import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqCreatepemantauannifas = async (data) => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.post(
      "http://localhost:5000/api/pemantauannifas",
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
