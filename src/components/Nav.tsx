import { Link, useMatch, useLocation } from "react-router-dom";
import { motion, useScroll, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";

const NavWrapper = styled(motion.nav)<{ ychange: number }>`
  width: 100%;
  height: 60px;
  top: 0;
  background-color: white;
  position: sticky;
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.ychange > 100 ? "1px solid #dfe6e9" : null};
`;

const NavBox = styled.div`
  width: 60%;
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
      ? "#ff2d78"
      : props.location === "/service" && props.serviceMatch
      ? "#ff2d78"
      : props.location === "/news" && props.newsMatch
      ? "#ff2d78"
      : props.location === "/partner" && props.partnerMatch
      ? "#ff2d78"
      : null};
  font-size: 20px;
  font-weight: ${(props) =>
    props.location === "/" && props.homeMatch
      ? "400"
      : props.location === "/service" && props.serviceMatch
      ? "400"
      : props.location === "/news" && props.newsMatch
      ? "400"
      : props.location === "/partner" && props.partnerMatch
      ? "400"
      : "300"};
`;

const NavBottom = styled(motion.div)`
  width: 100%;
  height: 2px;
  background-color: #ff2d78;
  position: absolute;
  bottom: 0;
`;

function Nav() {
  const location = useLocation().pathname;
  const homeMatch = useMatch("/")?.pattern.end;
  const serviceMatch = useMatch("/service")?.pattern.end;
  const newsMatch = useMatch("/news")?.pattern.end;
  const partnerMatch = useMatch("/partner")?.pattern.end;
  const { scrollY } = useScroll();
  const [ychange, setYchange] = useState(0);
  const navAnimation = useAnimation();
  useEffect(() => {
    scrollY.onChange(() => {
      setYchange(scrollY.get());
      if (scrollY.get() > 10 && scrollY.get() < 100) {
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
            <NavText location={location} homeMatch={homeMatch}>
              청춘온
            </NavText>
          </Link>
          {homeMatch && <NavBottom layoutId="nav" />}
        </NavItem>
        <NavItem>
          <Link to="/service" style={{ textDecoration: "none" }}>
            <NavText location={location} serviceMatch={serviceMatch}>
              서비스 안내
            </NavText>
          </Link>
          {serviceMatch && <NavBottom layoutId="nav" />}
        </NavItem>
        <NavItem>
          <Link to="/news" style={{ textDecoration: "none" }}>
            <NavText location={location} newsMatch={newsMatch}>
              활용 사례
            </NavText>
          </Link>
          {newsMatch && <NavBottom layoutId="nav" />}
        </NavItem>

        <NavItem>
          <Link to="/partner" style={{ textDecoration: "none" }}>
            <NavText location={location} partnerMatch={partnerMatch}>
              제휴 문의
            </NavText>
          </Link>
          {partnerMatch && <NavBottom layoutId="nav" />}
        </NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Nav;
