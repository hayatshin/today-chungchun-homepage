import { Link, useMatch, useLocation } from "react-router-dom";
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
  grid-template-columns: repeat(4, 1fr);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  position: relative;
`;

interface NavTextProps {
  location: string;
  homeMatch?: boolean;
  serviceMatch?: boolean;
  newsMatch?: boolean;
  partnerMatch?: boolean;
}

const NavText = styled.span<NavTextProps>`
  color: ${(props) =>
    props.location === "/" && props.homeMatch
      ? colors.mainColor
      : props.location === "/service" && props.serviceMatch
      ? colors.mainColor
      : props.location === "/news" && props.newsMatch
      ? colors.mainColor
      : props.location === "/partner" && props.partnerMatch
      ? colors.mainColor
      : colors.boldGray};
  font-size: 20px;
  font-weight: ${(props) =>
    props.location === "/" && props.homeMatch
      ? "500"
      : props.location === "/service" && props.serviceMatch
      ? "500"
      : props.location === "/news" && props.newsMatch
      ? "500"
      : props.location === "/partner" && props.partnerMatch
      ? "500"
      : "400"};
`;

const NavBottom = styled(motion.div)`
  width: 100%;
  height: 4px;
  background-color: #d35655;
  position: absolute;
  bottom: 0;
`;

function Nav() {
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
        <NavItem>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <img style={{ width: 120 }} src={require("../assets/logo.png")} />
          </Link>
          {homeMatch && <NavBottom layoutId="nav" />}
        </NavItem>
        <NavItem>
          <Link to="/service" style={{ textDecoration: "none" }}>
            <NavText location={location} serviceMatch={serviceMatch}>
              서비스 소개
            </NavText>
          </Link>
          {serviceMatch && <NavBottom layoutId="nav" />}
        </NavItem>
        <NavItem>
          <Link to="/app" style={{ textDecoration: "none" }}>
            <NavText location={location} newsMatch={appMatch}>
              앱 소개
            </NavText>
          </Link>
          {appMatch && <NavBottom layoutId="nav" />}
        </NavItem>

        <NavItem>
          <Link to="/partner" style={{ textDecoration: "none" }}>
            <NavText location={location} partnerMatch={partnerMatch}>
              계약 문의
            </NavText>
          </Link>
          {partnerMatch && <NavBottom layoutId="nav" />}
        </NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Nav;
