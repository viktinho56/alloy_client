import useData from "./useData";
const useCartItems = (id: number) =>
  useData<any>(
    `/cart/${id}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useCartItems;
