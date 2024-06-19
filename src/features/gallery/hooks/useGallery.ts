import useData from "../../../hooks/useData";

const useGallery = () =>
  useData<any>(
    `/gallery/`,
    {
      params: {},
    },
    []
  );

export default useGallery;
