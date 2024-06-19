import useData from "../../../hooks/useData";

const useTransactions = () =>
  useData<any>(
    `/transactions`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useTransactions;
