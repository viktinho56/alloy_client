import useData from "./useData";
const useServices = () =>
  useData<any>(
    `/services/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useServices;
