import React, { useState } from "react";
import styled from "styled-components";
import {
  EntryType,
  get_directory_contents,
} from "../../utils/file-system-utils";
import { FileOrFolderList } from "../../components/directory-listings/FileOrFolderList";

interface props {}

export const HomePage: React.FC<props> = () => {
  //     const [rootHandle, setRootHandle] = useState<
  //     FileSystemDirectoryHandle | undefined
  //   >(undefined);

  const [selected_folder, set_selected_folder] = useState<
    FileSystemDirectoryHandle | undefined
  >();

  const [selected_folder_contents, set_folder_contents] = useState<
    EntryType[] | undefined
  >();

  const open_folder = async () => {
    const directoryHandle = await window.showDirectoryPicker();
    set_selected_folder(directoryHandle); // ?

    const folder_contents = await get_directory_contents({ directoryHandle });
    set_folder_contents(folder_contents); // ?

    console.log({ folder_contents });

    // const templates_folder_handle = await traverse_folder_paths({
    //   folder_contents,
    //   paths: ["src", "templates"],
    // });
    // console.log({ templates_folder_handle });
  };

  return (
    <Container>
      <h2>home pagee</h2>
      <button onClick={open_folder}>open folder</button>

      {selected_folder &&
        selected_folder_contents?.map((entry) => (
          <FileOrFolderList
            key={entry[0]}
            entry={entry[1]}
            //   handleSelectFile={handleSelectFile}
            dirPath={selected_folder.name}
            parentHandle={selected_folder}
          />
        ))}
    </Container>
  );
};

const Container = styled.div``;
