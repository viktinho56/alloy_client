import useData from "../../../hooks/useData";

const usePaginatedUsers = ({ start, end }: any) =>
  useData<any>(
    `/teams/pagination/`,
    {
      params: {
        start,
        end,
      },
    },
    [start, end]
  );

export default usePaginatedUsers;
