/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const instance = axios.create({
  baseURL: '',
  timeout: 36000,
});

export default instance;
