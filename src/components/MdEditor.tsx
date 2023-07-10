import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { useLayoutEffect, useRef } from "react";
import { useMdEditorStore } from "@/lib/store/useMdEditorStore";

interface Props {
  defaultContent?: string;
  editorHeight?: string;
}

const MyMarkdownEditor = ({
  editorHeight = "300px",
  defaultContent,
}: Props) => {
  const { setEditorValue, editorValue } = useMdEditorStore();
  const editorRef = useRef<Editor>(null);

  useLayoutEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(editorValue);
    }
  }, [editorValue]);
  const handleBlur = () => {
    if (editorRef.current) {
      setEditorValue(editorRef.current.getInstance().getMarkdown());
    }
  };
  return (
    <div className="w-full px-4">
      <Editor
        initialValue={defaultContent ?? ""}
        previewStyle="vertical"
        height={editorHeight}
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default MyMarkdownEditor;
