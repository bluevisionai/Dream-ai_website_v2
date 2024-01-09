import React from "react";
import styled from "styled-components";
// Components
// import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/1.jpeg";
import AddImage2 from "../../assets/img/2.jpeg";
import AddImage3 from "../../assets/img/3.jpeg";
import AddImage4 from "../../assets/img/4.jpeg";

export default function Features() {
	return (
	<Wrapper id="services">
		{/* <div className="lightBg" style={{ padding: "50px 0" }}>
		<div className="container">
			<ClientSlider />
		</div>
		</div> */}
		<div className="whiteBg" style={{ padding: "60px 0" }}>
		<div className="container">
			<HeaderInfo>
			<h1 className="font40 extraBold">Unlock the Power of Dream Interpretation with AI</h1>
			<p className="font13">
				Discover the hidden meanings behind your dreams and increase your chances of winning the lottery.
			</p>
			</HeaderInfo>
			<ServiceBoxRow className="flex">
				<ServiceBoxWrapper>
					<ServiceBox
						// icon="roller"
						title="Dream Interpretation"
						subtitle="Get accurate interpretations of your dreams using advanced AI algorithms."
					/>
				</ServiceBoxWrapper>
				<ServiceBoxWrapper>
					<ServiceBox
						// icon="monitor"
						title="Lottery Number Prediction"
						subtitle="Receive potential lottery numbers based on the analysis of your dream interpretations."
					/>
				</ServiceBoxWrapper>
				<ServiceBoxWrapper>
					<ServiceBox
						// icon="browser"
						title="Personalized Algorithms"
						subtitle="Our AI crafts personalized algorithms, mapping your unique dream patterns to potential winning combinations. Your dreams become a bespoke source of inspiration for your next lottery play."
					/>
				</ServiceBoxWrapper>
				<ServiceBoxWrapper>
					<ServiceBox 
						// icon="printer" 
						title="Probabilistic Magic" 
						subtitle="The AI, armed with probabilistic models, generates number sets with enhanced winning potential. Your dreams become a magical ingredient in our algorithmic cauldron of luck!" 
					/>
				</ServiceBoxWrapper>
			</ServiceBoxRow>
		</div>
		<div className="lightBg">
			<div className="container">
			<Advertising className="flexSpaceCenter">
				<AddLeft>
				{/* <h4 className="font15 semiBold">A few words about company</h4> */}
				<h2 className="font40 extraBold">Experience Dream Interpretation Like Never Before</h2>
				<p className="font12">
					Our advanced AI technology analyzes your dreams to provide accurate interpretations and even suggests potential lottery numbers based on dream symbolism. Sign up now to start exploring the hidden meanings of your dreams.
				</p>
				<ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
					<div style={{ width: "190px" }}>
					<FullButton title="Get Started" action={() => alert("clicked")} />
					</div>
					{/* <div style={{ width: "190px", marginLeft: "15px" }}>
					<FullButton title="Contact Us" action={() => alert("clicked")} border />
					</div> */}
				</ButtonsRow>
				</AddLeft>
				<AddRight>
				<AddRightInner>
					<div className="flexNullCenter">
					<AddImgWrapp1 className="flexCenter">
						<img src={AddImage1} alt="office" />
					</AddImgWrapp1>
					<AddImgWrapp2>
						<img src={AddImage2} alt="office" />
					</AddImgWrapp2>
					</div>
					<div className="flexNullCenter">
					<AddImgWrapp3>
						<img src={AddImage3} alt="office" />
					</AddImgWrapp3>
					<AddImgWrapp4>
						<img src={AddImage4} alt="office" />
					</AddImgWrapp4>
					</div>
				</AddRightInner>
				</AddRight>
			</Advertising>
			</div>
		</div>
		</div>
	</Wrapper>
	);
}

const Wrapper = styled.section`
width: 100%;
`;
const ServiceBoxRow = styled.div`
@media (max-width: 860px) {
flex-direction: column;
}
`;
const ServiceBoxWrapper = styled.div`
width: 20%;
margin-right: 5%;
padding: 80px 0;
@media (max-width: 860px) {
width: 100%;
text-align: center;
padding: 40px 0;
}
`;
const HeaderInfo = styled.div`
@media (max-width: 860px) {
text-align: center;
}
`;
const Advertising = styled.div`
margin: 80px 0;
padding: 100px 0;
position: relative;
@media (max-width: 1160px) {
padding: 100px 0 40px 0;
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
position: absolute;
top: -70px;
right: 0;
@media (max-width: 860px) {
width: 80%;
position: relative;
order: 1;
top: -40px;
}
`;
const AddRightInner = styled.div`
width: 100%;
`;
const AddImgWrapp1 = styled.div`
width: 48%;
margin: 0 6% 10px 6%;
img {
width: 100%;
height: auto;
border-radius: 1rem;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;
const AddImgWrapp2 = styled.div`
width: 30%;
margin: 0 5% 10px 5%;
img {
width: 100%;
height: auto;
border-radius: 1rem;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;
const AddImgWrapp3 = styled.div`
width: 20%;
margin-left: 40%;
img {
width: 100%;
height: auto;
border-radius: 1rem;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;
const AddImgWrapp4 = styled.div`
width: 30%;
margin: 0 5%auto;
img {
width: 100%;
height: auto;
border-radius: 1rem;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;