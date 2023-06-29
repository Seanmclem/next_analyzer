import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

interface props {
  open: boolean;
}

export const FolderIcon: React.FC<props> = ({ open }) => {
  return (
    <FolderIconContainer className={`${open ? " open" : ""}`}>
      <MdKeyboardArrowRight size="20px" />
    </FolderIconContainer>
  );
};

const FolderIconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 20px;

  &.open {
    svg {
      transform: rotate(90deg);
    }
  }
`;
