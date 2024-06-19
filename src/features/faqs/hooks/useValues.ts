import useData from "../../../hooks/useData";

const useValues = () =>
  useData<any>(
    `/values/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useValues;
