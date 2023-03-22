import axios from "axios";
import { apiUrl } from "../constants/constants";

const instance = axios.create({
  baseURL: apiUrl,
});

export default instance;