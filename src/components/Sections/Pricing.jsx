import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Choose Your Plan</h1>
            <p className="font13">
              Select the plan that suits your dream interpretation needs
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$0,00/mo"
                title="Free"
                text="Access basic dream interpretation features"
                offers={[
                  { name: "Interpretation of up to 4 dreams per month", cheked: true },
                  { name: "Access to dream dictionary", cheked: true },
                  { name: "Receive general dream analysis", cheked: true },
                  { name: "Access to lottery number predictions", cheked: true },
                ]}
                
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$9,99/mo"
                title="Basic"
                text="Unlock more dream interpretation features"
                offers={[
                  { name: "Interpretation of up to 10 dreams per month", cheked: true },
                  { name: "Access to dream dictionary", cheked: true },
                  { name: "Receive general dream analysis", cheked: true },
                  { name: "Access to lottery number predictions", cheked: true },
                ]}
                
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$14,99/mo"
                title="Golden"
                text="Get the ultimate dream interpretation experience"
                offers={[
                  { name: "Unlimited dream interpretation", cheked: true },
                  { name: "Access to dream dictionary", cheked: true },
                  { name: "Receive general dream analysis", cheked: true },
                  { name: "Access to lottery number predictions", cheked: true },
                ]}
                
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




