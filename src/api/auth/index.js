import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;

export const LoginAsync = async (paramsdata) => {
  let response = null;
  try {
    const { data } = await api.post(`${url}/api/v1/login`, paramsdata);
    response = data;
  } catch (error) {
    response = error.response.data;
  } finally {
    return response;
  }
};

export const LogoutAsync = async () => {
  let response = null;
  try {
    const { data } = await api.get(`${url}/api/v1/logout`);
    response = data;
  } catch (error) {
    response = error.response.data;
  } finally {
    return response;
  }
};
