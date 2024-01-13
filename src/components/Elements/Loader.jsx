import React from "react";
import styled from "styled-components";
import CircleLoader from "react-spinners/CircleLoader";

export default function Loader() {
  return (
    
    <Wrapper >
        <CircleLoader color="#6556FF" />
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

