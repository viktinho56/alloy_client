import useData from "./useData";
const useProducts = () =>
  useData<any>(
    `/products/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useProducts;
