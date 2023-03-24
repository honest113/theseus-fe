import instance from "..";

export const adminRetrieveListCompany = async () => {
  return await instance.get('/company/admin-retrieve-list-company');
}

export const adminCreateCompany = async (body) => {
  return await instance.post('/company/admin-create-company', body);
}
