import useData from "../../../hooks/useData";

const useCourses = () =>
  useData<any>(
    `/case/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useCourses;
