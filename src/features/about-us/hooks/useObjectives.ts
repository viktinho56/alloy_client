import useData from "../../../hooks/useData";

const useObjectives = () =>
  useData<any>(
    `/objectives/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useObjectives;
