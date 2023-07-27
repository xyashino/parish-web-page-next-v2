import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";

export interface EditorWrapperForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const EditorWrapper = (props: EditorWrapperForwardedProps) => (
  <Editor {...props} ref={props.forwardedRef} />
);
export default EditorWrapper;
