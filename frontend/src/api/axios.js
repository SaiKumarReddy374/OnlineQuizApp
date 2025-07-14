// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://onlinequizapp-backend2.onrender.com", // or your backend URL
  withCredentials: true, // very important for cookies
});

export default instance;
