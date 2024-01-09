import React from "react";
import styled from "styled-components";
import CircleLoader from "react-spinners/CircleLoader";

export default function Loader({ tag, title, text, action, author }) {
  return (
    
    <Wrapper className="whiteBg radius8 shadow">
        <CircleLoader color="#36d7b7" />
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
    height: 100vh; /* Magic here */
    display: flex;
    justify-content: center;
    align-items: center;
`;

