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
//import apiClient from "../../../services/api-client";
import { UpdateUserApi } from "../services/userServices";
import AppTextArea from "../../../components/forms/AppTextArea";
//import AppTextArea from "../../../components/forms/AppTextArea";
// import AvatarEditor from "../../../components/common/AvatarEditor";
// import CustomEditAppSelect from "../../../components/common/CustomEditAppSelect";

const schema = yup
    .object({
        id: yup.number().required("User Id is required"),
        categoryName: yup.string().required("Category Name is required"),
        categoryDesc: yup.string().required("Description is required"),
        status: yup.bool().required("end time is required"),
        // serviceNumber: yup.string().required("Service Number is required"),
        // armedForce: yup.string().required("Armed Force is required"),
        // rank: yup.string().required("Rank is required"),
        //userName: yup.string().required("Username is required"),
    })
    .required();

export default function EditCategory({ close, data }: any) {
    //let url = data.avatarUrl;
    console.log(data);
    // let [codes, setCodes] = useState<any>([]);
    // let [avatar, setAvatar] = useState<any>("");
    // let [progress, setProgress] = useState(0);
    // let [displayProgress, setDisplayProgress] = useState<any>("none");
    //let [avatarError, setAvatarError] = useState<any>("hidden");
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    let [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        // setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "all",
        defaultValues: {
            id: data.id,
            categoryName: data.categoryName,
            categoryDesc: data.categoryDesc,
            status: data.status,
            //email: data.email,
            // serviceNumber: data.serviceNumber,
            // armedForce: data.armedForce,
            // rank: data.userRank,
        },
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
        console.log(data);
        data.status = true ? 1 : 0;
        let { response, error, isLoading } = await UpdateUserApi(data);
        setIsLoading(isLoading);
        setError(error);
        if (!error) {
            reset();
            setResponse(response);
            Notiflix.Report.success(
                "Success",
                "Updated Success",
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
            <AppInput
                errors={errors}
                register={register}
                property={"categoryName"}
                label={"Category Name"}
            />
            <AppTextArea
                errors={errors}
                register={register}
                property={"categoryDesc"}
                label={"Description"}

            />

            <Checkbox
                size={"lg"}
                {...register("status")}
                defaultChecked={data.status == 1 ? true : false}
            >
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
