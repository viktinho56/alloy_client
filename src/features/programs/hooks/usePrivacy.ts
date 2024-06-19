import useData from "../../../hooks/useData";

const usePrivacy = () =>
  useData<any>(
    `/privacy/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default usePrivacy;
