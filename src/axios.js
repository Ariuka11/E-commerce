import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjgzYjEzZTY1MjdjYjMzMDNhNWYwMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzkwMjI1MiwiZXhwIjoxNjQ0MTYxNDUyfQ.6F6rRattGTG2GM13ttYfPN9_EhM6rzjg-fyrTRg4lKI";

export const request = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `bearer ${TOKEN}` },
});
