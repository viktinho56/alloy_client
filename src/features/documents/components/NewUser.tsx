import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
import {
  Button,
  Box,
  Text,
  Spinner,
  // Center,
  Flex,
  Center,
  Progress,
  // Progress,
} from "@chakra-ui/react";

import { useState } from "react";
import Notiflix from "notiflix";
import { lightColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/forms/AppInput";
//import AvatarUploader from "../../../components/common/AvatarUploader";
import apiClient from "../../../services/api-client";
// import CustomAppSelect from "../../../components/common/CustomAppSelect";
import { CreateUserApi } from "../services/userServices";
import AppTextArea from "../../../components/forms/AppTextArea";

//import AvatarUploader from "../../../components/common/AvatarUploader";
import FileUploader from "../../../components/common/FileUploader";
import useAuth from "../../../hooks/useAuth";

const schema = yup
  .object({
    docName: yup.string().required("Name is required"),
    docDesc: yup.string().required("Description is required"),
  })
  .required();

export default function NewUser({ close }: any) {
  let { GetCurrentUser } = useAuth();
  // let [codes, setCodes] = useState<any>([]);
  let [avatar, setAvatar] = useState<any>("");
  let [progress, setProgress] = useState(0);
  let [displayProgress, setDisplayProgress] = useState<any>("none");
  let [avatarError, setAvatarError] = useState<any>("hidden");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const UploadFile = async (selectedFile: any) => {
    setDisplayProgress("block");
    let response = null;
    let doctype = null;
    let size = null;
    let path = null;
    let error = null;
    let progress = 0;
    let isLoading = false;
    const obj = new FormData();

    obj.append("myFile", selectedFile);
    await apiClient
      .post("/upload/single", obj, {
        onUploadProgress: (ProgressEvent) => {
          progress =
            (ProgressEvent.loaded /
              (ProgressEvent.total ? ProgressEvent.total : 0)) *
            100;
          setProgress(Math.floor(progress));
        },
      })
      .then((res) => {
        //setDisplayProgress("none");
        size = res.data.size;
        path = res.data.path;
        doctype = res.data.mimetype;
        response = "Uploaded Successfully";
        isLoading = false;
        progress = progress;
      })
      .catch((err) => {
        error = err.response.data;
        console.log(err);
        isLoading = false;
      });
    return { response, error, isLoading, progress, path, doctype, size };
  };
  console.log(error);
  console.log(response);
  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(error);
    console.log(response);
    data.email = GetCurrentUser()?.email;

    if (avatar && avatar.name.length > 0) {
      setIsLoading(true);
      let {
        path,
        error: uploadError,
        doctype,
        size,
      } = await UploadFile(avatar);
      console.log(path);
      data.docUrl = path;
      data.docType = doctype;
      data.docSize = size + " KB";
      if (!uploadError) {
        let { response, error, isLoading } = await CreateUserApi(data);
        setIsLoading(isLoading);
        setError(error);
        if (!error) {
          reset();
          setResponse(response);
          Notiflix.Report.success(
            "Success",
            "Form has been successfully submitted!",
            "OK,got  it!",
            () => {
              window.location.reload();
            }
          );
        } else {
          setIsLoading(false);
          setError(error);
          Notiflix.Report.failure(
            "Error",
            error ?? "An Error has Occured",
            "OK"
          );
        }
      } else {
        Notiflix.Notify.failure(uploadError);
      }
    } else {
      setAvatarError("visible");
    }
  };

  const handleAvatarChange = (file: any) => {
    setAvatarError("hidden");
    setAvatar(file);
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Box p={3} mx={{ base: 3 }}>
        <FileUploader onChange={(file: any) => handleAvatarChange(file)} />

        <Center visibility={avatarError} mt={0}>
          <Text fontSize={13} color={"red.500"}>
            File cannot be empty
          </Text>
        </Center>
        <Box display={displayProgress}>
          <Progress value={progress} size="xs" colorScheme="blue" />
          <Center>
            <Text fontSize={13} color={"blue.400"}>
              {progress}%
            </Text>
          </Center>
        </Box>
      </Box>

      <AppInput
        errors={errors}
        register={register}
        property={"docName"}
        label={"Document Name"}
      />
      <AppTextArea
        errors={errors}
        register={register}
        property={"docDesc"}
        label={"Description"}
      />

      <Flex gap={5}>
        <Button
          mx={0}
          onClick={close}
          size={"md"}
          w={"100%"}
          py={6}
          fontSize={"16px"}
          fontWeight={"medium"}
          colorScheme="red"
          mt={3}
          type="button"
        >
          Discard
        </Button>
        <Button
          mx={0}
          isLoading={isSubmitting}
          size={"md"}
          bg={yellowColor}
          w={"100%"}
          py={6}
          fontSize={"16px"}
          fontWeight={"medium"}
          color={lightColor}
          mt={3}
          type="submit"
        >
          {isLoading ? <Spinner /> : "Submit"}
        </Button>
      </Flex>
    </Box>
  );
}
