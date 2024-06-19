import useData from "./useData";
const useCartItems = (id: number, status: number) =>
  useData<any>(
    `/cart/${id}/${status}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useCartItems;
