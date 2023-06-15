import axios from "axios";
import jwt_decode from "jwt-decode";
export const reqToken = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/refreshtoken");
    const { accesstoken } = response.data;
    const decoded = jwt_decode(accesstoken);
    return { decoded, accesstoken };
  } catch (error) {
    throw error;
  }
};
