//import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyEditor({ content, handleChange }: any) {
  function Sa(data: any) {
    console.log(data);
    handleChange(data);
  }
  return (
    <Editor
      onEditorChange={(data) => Sa(data)}
      //onChange={}
      apiKey="e2bigi2zncvaxydd80w9ffh2ogpxm3jbramx0qmwexr0l62g"
      init={{
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (request: any, respondWith: any) =>
          respondWith.string(() => {
            console.log(request);
            Promise.reject("See docs to implement AI Assistant");
          }),
      }}
      initialValue={content}
    />
  );
}
