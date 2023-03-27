import instance from "..";

export const adminRetrieveListMerchant = async (companyId) => {
  return await instance.get('/merchant/admin-retrieve-list-merchant', { params: { companyId } });
}
