import apiClient from "../../../services/api-client";

export const CreateUserApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .post("/users", data)
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

export const SendResetEmailApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .post("/auth/password-reset", data)
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
    .put(`/users/profile/${data.userId}`, data)
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

export const UpdateUserPasswordApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .put(`/users/change-password/${data.userId}`, data)
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

export const UpdateValidateUserPasswordApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .put(`/users/validate-change-password/${data.userId}`, data)
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

export const UpdateUserPasswordByEmailApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .put(`/users/change-password-email/${data.email}`, data)
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
    .put(`/auth/account/${data.id}/${data.status}`)
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

export const DeleteUserByIdApi = async (id: string) => {
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .delete(`/users/${id}`)
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
