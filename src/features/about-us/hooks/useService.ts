import useData from "../../../hooks/useData";

const useService = () =>
  useData<any>(
    `/services/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useService;
