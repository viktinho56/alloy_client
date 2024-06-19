import useData from "../../../hooks/useData";

const usePaginatedProducts = ({ start, end }: any) =>
  useData<any>(
    `/products/pagination/`,
    {
      params: {
        start,
        end,
      },
    },
    [start, end]
  );

export default usePaginatedProducts;
