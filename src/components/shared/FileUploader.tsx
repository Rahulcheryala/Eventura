// 'use client'

import { useCallback, Dispatch, SetStateAction } from "react";
// import type { FileWithPath } from "@uploadthing/react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageURL: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({
  onFieldChange,
  imageURL,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center flex h-72 p-2 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 focus:ring-2 focus:ring-primary-500/60 focus:outline-none"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageURL ? (
        <div className="flex h-full w-full flex-1 justify-center">
          <img
            src={imageURL}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover sm:object-contain object-center"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <Image
            src="/assets/icons/upload.svg"
            alt="file upload"
            width={77}
            height={77}
          />
          <h2 className="mb-2 mt-2">Drag photo here</h2>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>

          <Button type="button" className="rounded-full">
            Upload Event Card
          </Button>
        </div>
      )}
    </div>
  );
}

export default FileUploader;
