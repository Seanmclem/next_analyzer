import React, { useCallback, useEffect, useState } from "react";
import { FolderIcon } from "./components/folderIcon/FolderIcon";
import { ChildItems } from "./components/childItems/ChildItems";
import styled from "styled-components";

interface Props {
  entry: FileSystemDirectoryHandle;
  handleSelectFile?: any;
  dirPath?: string;
  parentHandle: FileSystemDirectoryHandle;
}

export const FolderItem: React.FC<Props> = ({
  entry: folderHandle,
  handleSelectFile,
  dirPath,
  parentHandle,
}) => {
  const [open, setOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [subscription, setSubscription] = useState<any | undefined>(undefined);

  const [specificPath] = useState(`${dirPath}/${folderHandle.name}`);
  const depth = (dirPath?.split("/").length || 0) - 1 || 0;

  // const { show: showContextMenu } = useContextMenu({ id: FOLDER_MENU_ID });

  // useEffect(()=>{
  //     return () => {
  //         subscription?.unsubscribe?.()
  //         setSubscription(undefined)
  //     }
  // }, [])

  return (
    <FolderItemContainer>
      <div
        className={`folder-item ${isHighlighted ? "context-click" : ""}`}
        data-path={specificPath}
        key={folderHandle.name}
        onClick={() => setOpen(!open)}
        style={{
          paddingLeft: `${depth * 15}px`,
          paddingRight: `${depth * 15}px`,
        }}
        // onContextMenu={handleRigthClick}
      >
        <FolderIcon open={open} />
        <div className="folder-name-button">
          <div>{folderHandle.name}</div>
        </div>
      </div>

      <ChildItems
        parent={folderHandle}
        show={open}
        handleSelectFile={handleSelectFile}
        dirPath={`${dirPath}/${folderHandle.name}`}
      />
    </FolderItemContainer>
  );
};

const FolderItemContainer = styled.div`
  .folder-item {
    user-select: none;
    display: flex;
    align-items: center;
    padding: 3px 0;
    position: relative;
    z-index: 5;

    &.context-click {
      background-color: lightblue;
    }

    cursor: pointer;
    div {
      cursor: pointer;
    }

    .folder-name-button {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .item-menu {
      width: 21px;
      margin-right: 20px;
      opacity: 0;
      pointer-events: none;
    }

    &:hover {
      background-color: lightgray;

      .item-menu {
        position: relative;
        z-index: 10;
        opacity: 1;
        pointer-events: initial;
      }
    }
  }
`;
