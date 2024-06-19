import useData from "./useData";
const useMenu = () =>
  useData<any>(
    `/ordermenu/`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useMenu;
