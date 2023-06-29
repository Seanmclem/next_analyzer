import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface props {}

export const Root: React.FC<props> = () => {
  return (
    <Container>
      <h1>root</h1>
      <Outlet />{" "}
    </Container>
  );
};

const Container = styled.div``;
