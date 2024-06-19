import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
import {
    Button,
    Box,
    //Text,
    Spinner,
    // Center,
    Flex,
    Checkbox,
    // Progress,
} from "@chakra-ui/react";

import { useState } from "react";
import Notiflix from "notiflix";
import { lightColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/forms/AppInput";
// import AvatarUploader from "../../../components/common/AvatarUploader";
// import apiClient from "../../../services/api-client";
// import CustomAppSelect from "../../../components/common/CustomAppSelect";
import { CreateMenuApi } from "../services/userServices";
//import AppTextArea from "../../../components/forms/AppTextArea";

const schema = yup
    .object({
        menuName: yup.string().required(" Name is required"),
        start: yup.string().required("start time is required"),
        stop: yup.string().required("stop time is required"),
        status: yup.bool().required("end time is required"),
    })
    .required();

export default function NewMenu({ close }: any) {
    // let [codes, setCodes] = useState<any>([]);
    // let [avatar, setAvatar] = useState<any>("");
    // let [progress, setProgress] = useState(0);
    // let [displayProgress, setDisplayProgress] = useState<any>("none");
    // let [avatarError, setAvatarError] = useState<any>("hidden");
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
    // const UploadFile = async (selectedFile: any) => {
    //   setDisplayProgress("block");
    //   let response = null;
    //   let doctype = null;
    //   let path = null;
    //   let error = null;
    //   let progress = 0;
    //   let isLoading = false;
    //   const obj = new FormData();
    //   obj.append("myFile", selectedFile);
    //   await apiClient
    //     .post("/upload/single", obj, {
    //       onUploadProgress: (ProgressEvent) => {
    //         progress =
    //           (ProgressEvent.loaded /
    //             (ProgressEvent.total ? ProgressEvent.total : 0)) *
    //           100;
    //         setProgress(Math.floor(progress));
    //       },
    //     })
    //     .then((res) => {
    //       //setDisplayProgress("none");
    //       path = res.data.path;
    //       doctype = res.data.mimetype;
    //       response = "Uploaded Successfully";
    //       isLoading = false;
    //       progress = progress;
    //     })
    //     .catch((err) => {
    //       error = err.response.data;
    //       console.log(err);
    //       isLoading = false;
    //     });
    //   return { response, error, isLoading, progress, path, doctype };
    // };
    console.log(error);
    console.log(response);
    const onSubmit = async (data: any) => {
        data.status = true ? 1 : 0;
        console.log(data);
        let { response, error, isLoading } = await CreateMenuApi(data);
        setIsLoading(isLoading);
        setError(error);
        if (!error) {
            reset();
            setResponse(response);
            Notiflix.Report.success(
                "Success",
                response ?? "Created Successfully",
                "OK,got  it!",
                () => {
                    window.location.reload();
                }
            );
        } else {
            setIsLoading(false);
            setError(error);
            Notiflix.Report.failure("Error", error ?? "An Error has Occured", "OK");
        }
    };

    // const handleAvatarChange = (file: any) => {
    //   setAvatarError("hidden");
    //   setAvatar(file);
    // };

    return (
        <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
            {/* <Box p={3} mx={{ base: 3 }}>
        <AvatarUploader onChange={(file: any) => handleAvatarChange(file)} />

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
      </Box> */}

            <AppInput
                errors={errors}
                register={register}
                property={"menuName"}
                label={"Name"}
            />
            <AppInput
                errors={errors}
                register={register}
                property={"start"}
                label={"Start Time"}
                type={"time"}
            />
            <AppInput
                errors={errors}
                register={register}
                property={"stop"}
                label={"Stop Time"}
                type={"time"}
            />
           
            <Checkbox size={"lg"} {...register("status")} defaultChecked>
                Available
            </Checkbox>
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
