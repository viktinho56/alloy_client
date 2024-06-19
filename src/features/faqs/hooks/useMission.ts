import useData from "../../../hooks/useData";

const useMission = () =>
  useData<any>(
    `/mission/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useMission;
