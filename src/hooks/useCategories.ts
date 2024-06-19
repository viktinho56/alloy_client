import useData from "./useData";
const useCategories = () =>
  useData<any>(
    `/categories/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useCategories;
