import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import useMdEditorStore from "@/lib/store/useMdEditorStore";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface Props {
  defaultContent?: string;
}

const MyMarkdownEditor = ({ defaultContent = "" }: Props) => {
  const { editorValue, setEditorValue } = useMdEditorStore();

  useEffect(() => {
    setEditorValue(defaultContent);
  }, [defaultContent]);

  const handleEditorChange = (content: string | undefined) =>
    content !== undefined && setEditorValue(content);

  return (
    <div
      className="my-4 mx-auto mb-8 h-full w-full rounded-xl p-2 shadow bg-slate-950 md:p-4"
      data-color-mode="dark"
    >
      <MDEditor
        className="h-full w-full"
        value={editorValue}
        onChange={handleEditorChange}
      />
    </div>
  );
};

MyMarkdownEditor.displayName = "MyMarkdownEditor";
export default MyMarkdownEditor;
