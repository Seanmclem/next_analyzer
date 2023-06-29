import React, { useEffect, useState } from "react";

import styled from "styled-components";
import {
  EntryType,
  get_directory_contents,
} from "../../../../../utils/file-system-utils";
import { FileOrFolderList } from "../../../FileOrFolderList";

const ChildItemsContainer = styled.div``;

interface Props {
  parent: FileSystemDirectoryHandle;
  show: boolean;
  handleSelectFile?: any;
  dirPath?: string;
}

export const ChildItems: React.FC<Props> = ({
  parent,
  show,
  handleSelectFile,
  dirPath,
}) => {
  const [folderContentsHandles, setFolderContentsHandles] = useState<
    EntryType[]
  >([]);

  useEffect(() => {
    refreshInludedFiles(parent);
  }, [parent, show]);

  const refreshInludedFiles = async (handle: FileSystemDirectoryHandle) => {
    const filesOrFoldersHandles: EntryType[] = await get_directory_contents({
      directoryHandle: handle,
    });
    setFolderContentsHandles(filesOrFoldersHandles);
  };
  if (show && folderContentsHandles.length) {
    return (
      <ChildItemsContainer>
        {folderContentsHandles.map((entry: EntryType) => (
          <FileOrFolderList
            dirPath={dirPath}
            key={entry[0]}
            entry={entry[1]}
            handleSelectFile={handleSelectFile}
            parentHandle={parent}
          />
        ))}
      </ChildItemsContainer>
    );
  } else {
    return null;
  }
};
