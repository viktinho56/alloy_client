import useData from "./useData";
const useTerms = () =>
  useData<any>(
    `/terms/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useTerms;
