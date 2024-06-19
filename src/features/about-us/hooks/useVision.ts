import useData from "../../../hooks/useData";

const useVision = () =>
  useData<any>(
    `/vision/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useVision;
