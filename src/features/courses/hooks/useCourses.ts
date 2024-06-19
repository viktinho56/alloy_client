import useData from "../../../hooks/useData";

const useCourses = () =>
  useData<any>(
    `/courses/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useCourses;
