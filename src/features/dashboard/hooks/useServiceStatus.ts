import useData from "../../../hooks/useData";

const useServiceStatus = () =>
  useData<any>(
    `/maintenance`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useServiceStatus;
