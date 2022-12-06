import { Link, useMatch, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";
import colors from "../colors";

const NavWrapper = styled(motion.nav)<{ ychange: number }>`
  z-index: 99;
  width: 100%;
  height: 80px;
  top: 0;
  background-color: white;
  position: sticky;
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.ychange > 100 ? "1px solid #dfe6e9" : null};
`;

const NavBox = styled.div`
  width: 70%;
  height: 100%;
  top: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  position: relative;
  cursor: pointer;
`;

interface TextBar {
  ychange: number;
  homeMatch?: boolean;
}

const NewsText = styled.span<TextBar>`
  font-size: 20px;
  color: ${(props) =>
    props.ychange >= 702 && props.ychange < 2063 && props.homeMatch
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.ychange >= 702 && props.ychange < 2063 && props.homeMatch
      ? "500"
      : "400"};
`;

const ServiceText = styled.span<TextBar>`
  font-size: 20px;
  color: ${(props) =>
    props.ychange >= 2063 && props.ychange < 5234 && props.homeMatch
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.ychange >= 2063 && props.ychange < 5234 && props.homeMatch
      ? "500"
      : "400"};
`;

const AppText = styled.span<TextBar>`
  font-size: 20px;
  color: ${(props) =>
    props.ychange >= 5234 && props.ychange < 10336 && props.homeMatch
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.ychange >= 5234 && props.ychange < 10336 && props.homeMatch
      ? "500"
      : "400"};
`;

const PartnerText = styled.span<{ location: string; partnerMatch?: boolean }>`
  color: ${(props) =>
    props.location === "/partner" && props.partnerMatch
      ? colors.mainColor
      : colors.boldGray};
  font-size: 20px;
  font-weight: ${(props) =>
    props.location === "/partner" && props.partnerMatch ? "500" : "400"};
`;

const NavBottom = styled(motion.div)`
  width: 100%;
  height: 4px;
  background-color: #d35655;
  position: absolute;
  bottom: 0;
`;

function Nav() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const homeMatch = useMatch("/")?.pattern.end;
  const serviceMatch = useMatch("/service")?.pattern.end;
  const appMatch = useMatch("/app")?.pattern.end;
  const partnerMatch = useMatch("/partner")?.pattern.end;
  const { scrollY } = useScroll();
  const [ychange, setYchange] = useState(0);
  const navAnimation = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      console.log("y축", scrollY.get());
      setYchange(scrollY.get());
      if (scrollY.get() > 0 && scrollY.get() < 500) {
        navAnimation.start({
          opacity: 0,
        });
      } else {
        navAnimation.start({
          opacity: 1,
        });
      }
    });
  }, [scrollY]);
  return (
    <NavWrapper ychange={ychange} animate={navAnimation}>
      <NavBox>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            });
          }}
        >
          <img style={{ width: 120 }} src={require("../assets/logo.png")} />
          {ychange < 702 && homeMatch ? <NavBottom layoutId="nav" /> : null}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 720, behavior: "smooth" });
            });
          }}
        >
          <NewsText ychange={ychange} homeMatch={homeMatch}>
            활용 사례
          </NewsText>
          {ychange >= 702 && ychange < 2063 && homeMatch ? <NavBottom /> : null}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 2063, behavior: "smooth" });
            });
          }}
        >
          <ServiceText ychange={ychange} homeMatch={homeMatch}>
            서비스 소개
          </ServiceText>
          {ychange >= 2063 && ychange < 5234 && homeMatch ? (
            <NavBottom />
          ) : null}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 5234, behavior: "smooth" });
            });
          }}
        >
          <AppText ychange={ychange} homeMatch={homeMatch}>
            앱 소개
          </AppText>
          {ychange >= 5234 && ychange < 10336 && homeMatch ? (
            <NavBottom />
          ) : null}
        </NavItem>

        <NavItem
          onClick={() => {
            navigate("/partner");
            window.scrollTo(0, 0);
          }}
        >
          <PartnerText location={location} partnerMatch={partnerMatch}>
            계약 문의
          </PartnerText>
          {partnerMatch && <NavBottom />}
        </NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Nav;
