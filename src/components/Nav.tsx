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

interface MunuTextForm {
  page: string;
  ychange: number;
  location: string;
}

const NewsText = styled.span<MunuTextForm>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "news" ||
    (props.location === "/" && props.ychange >= 702 && props.ychange < 2063)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "news" ||
    (props.location === "/" && props.ychange >= 702) ||
    (props.location === "/" && props.ychange < 2063)
      ? "500"
      : "400"};
`;

const ServiceText = styled.span<MunuTextForm>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "service" ||
    (props.location === "/" && props.ychange >= 2063 && props.ychange < 5234)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "service" ||
    (props.location === "/" && props.ychange >= 2063) ||
    (props.location === "/" && props.ychange < 5234)
      ? "500"
      : "400"};
`;

const AppText = styled.span<MunuTextForm>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "app" ||
    (props.location === "/" && props.ychange >= 5234 && props.ychange < 10336)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "app" ||
    (props.location === "/" && props.ychange >= 5234) ||
    (props.location === "/" && props.ychange < 10336)
      ? "500"
      : "400"};
`;

const PartnerText = styled.span<MunuTextForm>`
  color: ${(props) =>
    props.location === "/partner" ? colors.mainColor : colors.boldGray};
  font-size: 20px;
  font-weight: ${(props) => (props.location === "/partner" ? "500" : "400")};
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
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [ychange, setYchange] = useState(0);
  const navAnimation = useAnimation();
  const [page, setPage] = useState("home");

  console.log(location, page, ychange);

  useEffect(() => {
    scrollY.onChange(() => {
      console.log("y축", scrollY.get(), location, page);
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
          {page === "home" ||
            (location === "/" && ychange < 702 && <NavBottom />)}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 703, behavior: "smooth" });
            });
          }}
        >
          <NewsText page={page} ychange={ychange} location={location}>
            활용 사례
          </NewsText>
          {page === "news" ||
          (location === "/" && ychange >= 702 && ychange < 2063) ? (
            <NavBottom />
          ) : null}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 2064, behavior: "smooth" });
            });
          }}
        >
          <ServiceText page={page} ychange={ychange} location={location}>
            서비스 소개
          </ServiceText>
          {page === "service" ||
          (location === "/" && ychange >= 2063 && ychange < 5234) ? (
            <NavBottom />
          ) : null}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 5235, behavior: "smooth" });
            });
          }}
        >
          <AppText page={page} ychange={ychange} location={location}>
            앱 소개
          </AppText>
          {page === "app" ||
          (location === "/" && ychange >= 5234 && ychange < 10336) ? (
            <NavBottom />
          ) : null}
        </NavItem>

        <NavItem
          onClick={() => {
            navigate("/partner");
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            });
          }}
        >
          <PartnerText page={page} ychange={ychange} location={location}>
            계약 문의
          </PartnerText>
          {location === "/partner" && <NavBottom />}
        </NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Nav;
