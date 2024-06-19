import useData from "../../../hooks/useData";

const useCourses = () =>
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

export default useCourses;
