import instance from "..";

export const loginByAdmin = async (body) => {
  return await instance.post('/admin/login', body);
}
