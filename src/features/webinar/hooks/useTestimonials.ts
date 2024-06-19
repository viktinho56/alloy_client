import useData from "../../../hooks/useData";

const useTestimonials = () =>
  useData<any>(
    `/events/`,
    {
      params: {},
    },
    []
  );

export default useTestimonials;
