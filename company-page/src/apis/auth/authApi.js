import instance from "..";

export const loginByBusinessAccount = async (body) => {
  return await instance.post('/business-account/login', body);
}
