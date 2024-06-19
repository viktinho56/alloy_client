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
  Center,
  Flex,
  Progress,
  FormControl,
  //FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

import { useState } from "react";
import Notiflix from "notiflix";
import { lightColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/forms/AppInput";
//import AvatarUploader from "../../../components/common/AvatarUploader";
import apiClient from "../../../services/api-client";
//import CustomAppSelect from "../../../components/common/CustomAppSelect";
import { CreateUserApi } from "../services/userServices";
import ImageUploader from "../../../components/common/ImageUploader";
//import RichEditor from "../../../components/common/RichEditor";
import TinyEditor from "../../../components/common/TinyEditor";

const schema = yup
  .object({
    courseName: yup.string().required("Course Name is required"),
    //content: yup.string().required("Content is required"),
  })
  .required();

export default function NewUser({ close }: any) {
  let [updatedContent, setUpdatedContent] = useState("");
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
    return { response, error, isLoading, progress, path, doctype };
  };
  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(error);
    console.log(response);
    data.content = updatedContent;
    if (avatar && avatar.name.length > 0) {
      setIsLoading(true);
      let { path, error: uploadError } = await UploadFile(avatar);
      console.log(path);
      data.courseCover = path;
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
        <ImageUploader onChange={(file: any) => handleAvatarChange(file)} />

        <Center visibility={avatarError} mt={0}>
          <Text fontSize={13} color={"red.500"}>
            Avatar cannot be empty
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
        property={"courseName"}
        label={"Course Name"}
      />
      <Flex justifyContent={"space-between"} gap={5} mb={3}>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <TinyEditor
            handleChange={(data: string) => setUpdatedContent(data)}
            content={""}
          />
          {/* <RichEditor
            handleChange={(data: string) => setUpdatedContent(data)}
            content={""}
          /> */}

          {/* <FormHelperText color={"red"}>
            {errors.content?.message}
          </FormHelperText> */}
        </FormControl>
      </Flex>
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
