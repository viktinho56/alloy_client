import useData from "../../../hooks/useData";

const useTerms = () =>
  useData<any>(
    `/terms/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useTerms;
