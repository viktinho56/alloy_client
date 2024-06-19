import useData from "./useData";
const useDocuments = () =>
  useData<any>(
    `/documents/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useDocuments;
