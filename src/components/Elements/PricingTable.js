import React from "react";
import styled from "styled-components";
// Components
// import FullButton from "../Buttons/FullButton";
// Assets
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
// import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
// import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
// import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";


import pink from "../../assets/img/pink.jpg";
import blue from "../../assets/img/blue.jpg";
import black from "../../assets/img/black.jpg";

export default function PricingTable({ icon, price, title, text,  offers, action }) {
  // let getIcon;
  let backGround;

  switch (icon) {
    case "roller":
      // getIcon = <RollerIcon />;
      backGround = pink;
      break;
    case "monitor":
      // getIcon = <MonitorIcon />;
      backGround = blue;
      break;
    case "browser":
      // getIcon = <BrowserIcon />;
      backGround = black;
      break;
    case "printer":
      // getIcon = <PrinterIcon />;
      break;
    default:
      // getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="whiteBg radius8 shadow"  style={{backgroundImage: `url("${backGround}")`, objectFit: `cover`}} >
      <div className="flexSpaceCenter">
        {/* {getIcon} */}
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font14">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font21 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
      {/* <div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>
        <FullButton title="Buy" action={action} />
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
