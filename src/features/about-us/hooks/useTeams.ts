import useData from "../../../hooks/useData";

const useTeams = () =>
  useData<any>(
    `/teams/`,
    {
      params: {
        // start,
        // end,
      },
    },
    []
  );

export default useTeams;
