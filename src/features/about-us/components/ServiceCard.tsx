import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
import {
  Button,
  Box,
  //   Text,
  Spinner,
  //   Center,
  Flex,
  //   Progress,
  FormControl,
  //FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

import { useState } from "react";
import Notiflix from "notiflix";
import { lightColor, yellowColor } from "../../../constants";
// import AppInput from "../../../components/common/AppInput";
// import apiClient from "../../../services/api-client";
// import { UpdateUserApi } from "../services/userServices";
//import AvatarEditor from "../../../components/common/AvatarEditor";
// import CustomEditAppSelect from "../../../components/common/CustomEditAppSelect";
//import ImageEditor from "../../../components/common/ImageEditor";
//import RichEditor from "../../../components/common/RichEditor";
// import { UpdateUserApi } from "../services/visionService";
import TinyEditor from "../../../components/common/TinyEditor";
import { UpdateServiceApi } from "../services/mainService";

const schema = yup
  .object({
    id: yup.number().required(" Id is required"),
    content: yup.string().required("Content is required"),
  })
  .required();

export default function ServiceCard({ data }: any) {
  let cn = data.content;
  console.log(data);
  // let [codes, setCodes] = useState<any>([]);
  let [updatedContent, setUpdatedContent] = useState(data.content);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  const {
    //register,
    handleSubmit,
    reset,
    //setValue,
    formState: { isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      id: data.id,
      content: data.content,

      // rank: data.userRank,
    },
    resolver: yupResolver(schema),
  });

  console.log(error);
  console.log(response);
  const onSubmit = async (data: any) => {
    console.log(data);
    if (updatedContent && updatedContent.length > 0) {
      data.content = updatedContent;
    } else {
      data.content = cn;
    }
    let { response, error, isLoading } = await UpdateServiceApi(data);
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
      Notiflix.Report.failure("Error", error ?? "An Error has Occured", "OK");
    }
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Flex zIndex={10000} justifyContent={"space-between"} gap={5} mb={3}>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <TinyEditor
            handleChange={(data: string) => setUpdatedContent(data)}
            content={cn}
          />

          {/* <FormHelperText color={"red"}>{errors.title?.message}</FormHelperText> */}
        </FormControl>
      </Flex>
      <Flex gap={5}>
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
