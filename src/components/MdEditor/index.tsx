import React, { forwardRef, useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { EditorWrapperForwardedProps } from "@/components/MdEditor/editorWrapper";
import { useMdEditorStore } from "@/lib/store/useMdEditorStore";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<EditorWrapperForwardedProps>(
  () => import("./editorWrapper"),
  { ssr: false },
);
const EditorWithForwardedRef = forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));
EditorWithForwardedRef.displayName = "EditorWithForwardedRef";

interface Props extends EditorProps {
  defaultContent?: string;
  editorHeight?: string;
}

export const MdEditor: React.FC<Props> = ({
  defaultContent,
  editorHeight = "300px",
  ...props
}) => {
  const { setEditorValue, editorValue } = useMdEditorStore();
  const editorRef = useRef<EditorType | null>(null);
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
    <div className="w-full">
      <EditorWithForwardedRef
        {...props}
        initialValue={defaultContent ?? ""}
        previewStyle="tab"
        height={editorHeight}
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        onBlur={handleBlur}
        autofocus={false}
        language="pl-PL"
      />
    </div>
  );
};
