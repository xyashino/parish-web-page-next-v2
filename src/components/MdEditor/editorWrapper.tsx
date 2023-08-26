import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/pl-pl";
import "@toast-ui/editor/dist/toastui-editor.css";

export interface EditorWrapperForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const EditorWrapper = (props: EditorWrapperForwardedProps) => (
  <Editor {...props} ref={props.forwardedRef} />
);
export default EditorWrapper;
