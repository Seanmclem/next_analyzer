import styled from "styled-components";
import { getIconForFile } from "vscode-icons-js";

export const FileIcon = ({ filename }: { filename: string }) => {
  return (
    <IconContainer>
      <IconImage src={`/icons/${getIconForFile(filename)}`} alt="file" />
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 17px;
  justify-content: center;
  margin-right: 5px;
`;

const IconImage = styled.img`
  width: 100%;
`;
