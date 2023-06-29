import React from "react";
import { FileItem } from "./fileItem/FileItem";
import { FolderItem } from "./folderItem/FolderItem";

interface Props {
  entry: FileSystemHandle;
  handleSelectFile?: any;
  dirPath?: string;
  parentHandle: FileSystemDirectoryHandle;
}

export const FileOrFolderList: React.FC<Props> = ({
  entry,
  handleSelectFile,
  dirPath,
  parentHandle,
}) => {
  if (entry.kind === "directory") {
    return (
      <FolderItem
        entry={entry as FileSystemDirectoryHandle}
        handleSelectFile={handleSelectFile}
        dirPath={dirPath}
        parentHandle={parentHandle}
      />
    );
  } else {
    return (
      <FileItem
        entry={entry as FileSystemFileHandle}
        handleSelectFile={handleSelectFile}
        dirPath={dirPath}
        parentHandle={parentHandle}
      />
    );
  }
};
