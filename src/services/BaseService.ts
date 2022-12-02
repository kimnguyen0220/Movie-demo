import axiosClient from "./interceptors";
const get = (path = "", params = {}): Promise<any> => {
  return axiosClient.get(path, { params });
};

const post = async (path = "", data: {}): Promise<any> => {
  return await axiosClient.post(path, data);
};

const put = (path = "", data: {}): Promise<any> => {
  return axiosClient.put(path, data);
};

const patch = (path = "", data: {}): Promise<any> => {
  return axiosClient.patch(path, data);
};

const remove = (path = ""): Promise<any> => {
  return axiosClient.delete(path);
};

const BaseService = {
  get,
  post,
  put,
  patch,
  remove,
};

export default BaseService;
