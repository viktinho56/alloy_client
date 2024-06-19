import useData from "../../../hooks/useData";

const useTestimonials = () =>
  useData<any>(
    `/testimonials/`,
    {
      params: {},
    },
    []
  );

export default useTestimonials;
