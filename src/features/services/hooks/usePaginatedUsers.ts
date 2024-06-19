import useData from "../../../hooks/useData";

const usePaginatedUsers = ({ start, end }: any) =>
  useData<any>(
    `/services/pagination/`,
    {
      params: {
        start,
        end,
      },
    },
    [start, end]
  );

export default usePaginatedUsers;
