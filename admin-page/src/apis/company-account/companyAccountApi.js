import instance from "..";

export const adminRetrieveListCompanyAccount = async (companyId) => {
  return await instance.get('/company-account/admin-retrieve-list-company-account', { params: { companyId } });
}
