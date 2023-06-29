import React, { useEffect, useState } from "react";
import { FileIcon } from "./components/FileIcon/FileIcon";
import { styled } from "styled-components";

interface Props {
  entry: FileSystemFileHandle;
  handleSelectFile?: any;
  dirPath?: string;
  parentHandle: FileSystemDirectoryHandle;
}

export const FileItem: React.FC<Props> = ({
  entry: fileHandle,
  dirPath,
  parentHandle,
}) => {
  const [specificPath] = useState(`${dirPath}/${fileHandle.name}`);

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [subscription, setSubscription] = useState<any | undefined>(undefined);

  useEffect(() => {
    return () => {
      subscription?.unsubscribe?.();
      setSubscription(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const depth = (dirPath?.split("/").length || 0) - 1 || 0;

  // const { show: showContextMenu } = useContextMenu({ id: FILE_MENU_ID });
  const handleRigthClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // showContextMenu(event, {
    //   id: FILE_MENU_ID,
    //   props: { fileHandle, parentHandle },
    // });
    // subscribeHighlightFolder();
    // HighlightedService.setItem({ path: specificPath, handle: fileHandle });
  };

  // const handleSelectFileDefault = (file: FileSystemFileHandle) => {
  //   console.log("file-selected ->", { file });
  //   const fileAlreadyOpened = openTabs.tabs.some(tab => tab.path === specificPath)
  //   if (fileAlreadyOpened) {
  //     makeActive(specificPath)
  //     return
  //   }
  //   const fileTab: FileTab = {
  //     name: fileHandle.name,
  //     path: specificPath,
  //     fileHandle: fileHandle,
  //     isActive: false
  //   }

  //   addFileToTabs(fileTab)
  //   makeActive(fileTab.path)
  //   console.log('zustand =  openTabs', openTabs)
  // };

  return (
    <FileItemContainer
      className={`${isHighlighted ? "context-click" : ""}`}
      key={fileHandle.name}
      // onClick={() => handleSelectFileDefault(fileHandle)}
      style={{
        paddingLeft: `${depth * 15}px`,
        paddingRight: `${depth * 15}px`,
      }}
      onContextMenu={handleRigthClick}
    >
      <FileIcon filename={fileHandle.name} />
      <div>{fileHandle.name}</div>
    </FileItemContainer>
  );
};

const FileItemContainer = styled.div`
  white-space: nowrap;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 3px 0;

  &.context-click {
    background-color: lightblue;
  }

  cursor: pointer;
  .file-icon-container {
    margin-left: 5px;
  }

  &:hover {
    background-color: lightgray;
  }
`;
