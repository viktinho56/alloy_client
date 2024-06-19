import apiClient from "../../../services/api-client";

export const CreateUserApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .post("/case", data)
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

export const UpdateUserApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .put(`/case/${data.id}`, data)
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

export const UpdateUserStatusApi = async (data: any) => {
  console.log(data);
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .put(`/case/${data.id}/${data.status}`)
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

export const DeleteByIdApi = async (id: string) => {
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .delete(`/case/${id}`)
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
