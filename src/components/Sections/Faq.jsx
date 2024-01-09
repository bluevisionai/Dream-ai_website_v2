import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
// import FullButton from "../Buttons/FullButton";
// import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Faq() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Common questions</h1>
            <p className="font13">
              Here are some of the most common questions that we get.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                // title="New Office!"
                text="Dream interpretation is the process of assigning meaning to dreams. It involves analyzing the symbols, emotions, and events in a dream to understand its significance."
                // tag="company"
                title="What is dream interpretation?"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                // title="New Office!"
                text="Our website uses advanced artificial intelligence algorithms to analyze dream patterns and symbols. It compares them with a vast database of dream interpretations to provide accurate insights."
                // tag="company"
                title="How does AI interpret dreams?"
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                // title="New Office!"
                text="Dream interpretation can provide insights and guidance, but it cannot guarantee winning lottery numbers. It can help you understand the underlying emotions and desires related to wealth and luck."
                // tag="company"
                title="Can dream interpretation help me win the lottery?"
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                // title="New Office!"
                text="Yes, we take the security and privacy of our users seriously. We use encryption and follow industry best practices to protect your personal information."
                title="Is my personal information secure?"
              />
            </div>
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;