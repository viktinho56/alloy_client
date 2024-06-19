import useData from "../../../hooks/useData";

const useClients = () =>
  useData<any>(
    `/clients/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useClients;
