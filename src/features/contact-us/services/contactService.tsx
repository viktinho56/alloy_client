import apiClient from "../../../services/api-client";

export const SendEmail = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .post("/email/sendContactEmail", data)
    .then((res) => {
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};
