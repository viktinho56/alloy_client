import useData from "./useData";
const usePrivacy = () =>
  useData<any>(
    `/privacy/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default usePrivacy;
