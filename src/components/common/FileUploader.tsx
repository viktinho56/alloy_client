import { Box } from "@chakra-ui/react";
import { useRef } from "react";

const FileUploader = ({ onChange }: any) => {
  let filePicker = useRef<HTMLInputElement>(null);
  // let [avatar, setAvatar] = useState("https://placehold.co/600x600/EEE/31343C");
  const ImageConverter = (evt: any) => {
    let file = evt.target.files[0];
    // setAvatar(URL.createObjectURL(file));
    onChange(file);
  };
  return (
    <Box>
      <input
        onChange={(e) => ImageConverter(e)}
        //style={{ display: "none" }}
        ref={filePicker}
        type="file"
      />
    </Box>
  );
};

export default FileUploader;
