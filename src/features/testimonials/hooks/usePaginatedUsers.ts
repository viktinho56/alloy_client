import useData from "../../../hooks/useData";

const usePaginatedUsers = ({ start, end }: any) =>
  useData<any>(
    `/testimonials/pagination/`,
    {
      params: {
        start,
        end,
      },
    },
    [start, end]
  );

export default usePaginatedUsers;
