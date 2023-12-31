import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqGetpemantauannifas = async (keyword, page, limit) => {
  try {
    const { accesstoken } = await reqToken();
    const response = await axios.get(
      `http://localhost:5000/api/pemantauannifas?search_query=${keyword}&page=${page}&limit=${limit}`,
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
