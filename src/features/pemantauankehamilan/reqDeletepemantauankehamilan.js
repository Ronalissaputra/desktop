import axios from "axios";
import { reqToken } from "../refreshtoken/reqToken";

export const reqDeletepemantauankehamilan = async (id) => {
  try {
    const { accesstoken } = await reqToken();
    await axios.delete(`http://localhost:5000/api/pemantauankehamilan/${id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};
