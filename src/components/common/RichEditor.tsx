import { Box } from "@chakra-ui/react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import { Bold, Italic } from "@ckeditor/ckeditor5-basic-styles";
// import { Essentials } from "@ckeditor/ckeditor5-essentials";
// import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
const RichEditor = ({ content, handleChange }: any) => {
  function Sa(data: string) {
    console.log(data);
    handleChange(data);
  }
  return (
    <Box zIndex={100000000}>
      <CKEditor
        editor={ClassicEditor}
        config={
          {
            //plugins: [Paragraph, Bold, Italic, Essentials],
            //toolbar: ["bold", "italic"],
          }
        }
        data={content}
        onReady={(editor) => {
          //editor.setData(content);
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          Sa(data);
          console.log({ event, editor, data });
        }}
        onBlur={(editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(editor) => {
          console.log("Focus.", editor);
        }}
      />
    </Box>
  );
};

export default RichEditor;
