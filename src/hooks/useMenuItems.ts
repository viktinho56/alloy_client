import useData from "./useData";
const useMenuItems = (id:number) =>
  useData<any>(
    `/ordermenu/menu-item/${id}`,
    {
      params: {
        // property: userQuery.property,
        // search: userQuery.searchText,
      },
    },
    []
  );

export default useMenuItems;
