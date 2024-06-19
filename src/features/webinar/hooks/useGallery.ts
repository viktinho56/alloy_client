import useData from "../../../hooks/useData";

const useGallery = () =>
  useData<any>(
    `/events/`,
    {
      params: {},
    },
    []
  );

export default useGallery;
