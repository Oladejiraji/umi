"use client";
import { FilePlusPreview } from "@/types/generalTypes";
import React, { ReactNode, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = () => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 0,
  borderRadius: 4,
  borderColor: "transparent",
  borderStyle: "solid",
  backgroundColor: "transparent",
  color: "transparent",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
  height: "100%",
  minHeight: "150px",
});

const focusedStyle = {
  borderColor: "#269984",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

interface FileUploadProps {
  containerClass?: string;

  setFile?: (file: FilePlusPreview[]) => void;
  accept?: any; // should be mime types
  children?: ReactNode; // Incase you want a custom component for the input
}

const FileUpload = ({
  containerClass,
  setFile = () => {},
  accept = { "image/*": [] },
  children,
}: FileUploadProps) => {
  const {
    getRootProps,
    getInputProps,
    // isDragActive,
    // acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
    // isFileDialogActive,
  } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file: File) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });
      setFile(acceptedFiles as unknown as FilePlusPreview[]);
    },
    accept,
    multiple: true,
  });

  const style = useMemo(
    () => ({
      ...baseStyle(),
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  return (
    <div className={containerClass}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {children}
      </div>
    </div>
  );
};

export default FileUpload;
