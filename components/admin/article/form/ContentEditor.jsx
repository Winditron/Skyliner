import { Form } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import config from "../../../../config";

export default function ContentEditor(props) {
  const { error } = props;
  return (
    <div>
      <label className="form-label">Inhalt:</label>
      {error && (
        <div className="invalid-feedback d-block mb-2 mt-0">
          {error?.message}
        </div>
      )}
      <Editor
        tinymceScriptSrc={config.base.publicUrl + "/tinymce/tinymce.min.js"}
        textareaName="content"
        {...props}
        init={{
          plugins: ["image", "autoresize"],
          object_resizing: true,
        }}
      />
    </div>
  );
}
