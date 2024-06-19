import useData from "../../../hooks/useData";

const usePaginatedMenu = ({ start, end }: any) =>
  useData<any>(
    `/ordermenu/pagination/`,
    {
      params: {
        start,
        end,
      },
    },
    [start, end]
  );

export default usePaginatedMenu;
