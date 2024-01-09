import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// Assets
// import ProjectImg1 from "../../assets/img/projects/1.png";
// import ProjectImg2 from "../../assets/img/projects/2.png";
// import ProjectImg3 from "../../assets/img/projects/3.png";
// import ProjectImg4 from "../../assets/img/projects/4.png";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Gallery() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Dream Interpretation Gallery</h1>
            <p className="font13">
              Explore the fascinating world of dream interpretation
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={"https://images.unsplash.com/photo-1636576506547-583b77aea68a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTY5MTEyMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"}
                // title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={"https://images.unsplash.com/photo-1605202880971-478c287c1ebc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTY5MTEyMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"}
                // title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={"https://images.unsplash.com/photo-1517656642936-5c2c1b70cf8a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTY5MTEyMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"}
                // title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={"https://images.unsplash.com/photo-1578941268334-82cbf7fdb42c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTY5MTEyMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"}
                // title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={"https://images.unsplash.com/photo-1611673983948-18286e86703e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTY5MTEyMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"}
                // title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={"https://images.unsplash.com/photo-1536893827774-411e1dc7c902?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTY5MTEyMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"}
                // title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              {/* <h4 className="font15 semiBold">A few words about company</h4> */}
              <h2 className="font40 extraBold">Unlock the Secrets of Your Dreams</h2>
              <p className="font12">
              Discover the power of artificial intelligence in interpreting dreams and predicting lottery numbers.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                {/* <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div> */}
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
