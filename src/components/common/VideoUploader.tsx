import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const VideoUploader = ({ onChange }: any) => {
  let filePicker = useRef<HTMLInputElement>(null);
  let videoEl = useRef<HTMLVideoElement>(null);
  let [avatar, setAvatar] = useState("");
  let [fileName, setFileName] = useState("");

  const ImageConverter = (evt: any) => {
    let file = evt.target.files[0];
    setFileName(file.name);
    setAvatar(URL.createObjectURL(file));
    onChange(file);
    let el = videoEl.current?.src;
    el = avatar;
    console.log(el);
    //document.querySelector("video").src = blobURL;
  };

  return (
    <Box>
      <input
        onChange={(e) => ImageConverter(e)}
        style={{ display: "none" }}
        ref={filePicker}
        type="file"
      />
      {/* <video ref={videoEl} controls width="250">
        <source src={avatar} type="video/mp4" />
      </video> */}
      <Center>
        <Button onClick={() => filePicker.current?.click()}>Choose File</Button>
      </Center>

      <Text textAlign={"center"} fontSize={12}>
        {fileName}
      </Text>
      <Box mt={2}>
        <Text textAlign={"center"} fontSize={12}>
          Allowed file types: mp4, 3gp, avi
        </Text>
        <Text textAlign={"center"} fontSize={14}>
          Click the icon to choose a video
        </Text>
      </Box>
    </Box>
  );
};

export default VideoUploader;
