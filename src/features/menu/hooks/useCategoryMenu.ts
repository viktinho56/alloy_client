import useData from "../../../hooks/useData";

const useCategoryMenu = (id: any) =>
  useData<any>(
    `/categories/category-menu/${id}`,
    {
      params: {
        //start,
        //end,
      },
    },
    []
  );

export default useCategoryMenu;
