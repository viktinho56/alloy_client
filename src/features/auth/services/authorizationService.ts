import apiClient from "../../../services/api-client";

export const Authorize = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  let obj = { email: data.email, password: data.password };
  await apiClient
    .post("/auth/authorize", obj)
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

export const AuthorizeAdmin = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  let obj = { email: data.email, password: data.password };
  await apiClient
    .post("/auth/admin", obj)
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

export const CreateAccount = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .put(`/users/`, data)
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
export const VerifyAccount = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .post("/users/verify", data)
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

export const SetGeolocation = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .put("/auth/setGeolocation", data)
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

export const SendOtp = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .post("/auth/otp", data)
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
