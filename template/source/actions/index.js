import axios from "axios";
import { config } from "../config";
export const client = axios.create({
  baseURL: `${config.protocol}://${config.host}:${config.port}`,
  headers: {
    "Content-Type": `${config.type}`
  }
})
