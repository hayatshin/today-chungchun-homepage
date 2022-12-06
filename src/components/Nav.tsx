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

const NewsText = styled.span<{ page: string }>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "news" ? colors.mainColor : colors.boldGray};
  font-weight: ${(props) => (props.page === "home" ? "500" : "400")};
`;

const ServiceText = styled.span<{ page: string }>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "service" ? colors.mainColor : colors.boldGray};
  font-weight: ${(props) => (props.page === "service" ? "500" : "400")};
`;

const AppText = styled.span<{ page: string }>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "app" ? colors.mainColor : colors.boldGray};
  font-weight: ${(props) => (props.page === "app" ? "500" : "400")};
`;

const PartnerText = styled.span<{ page: string }>`
  color: ${(props) =>
    props.page === "partner" ? colors.mainColor : colors.boldGray};
  font-size: 20px;
  font-weight: ${(props) => (props.page === "partner" ? "500" : "400")};
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
  const { scrollY } = useScroll();
  const [ychange, setYchange] = useState(0);
  const navAnimation = useAnimation();
  const [page, setPage] = useState("home");

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

  useEffect(() => {
    if (page === "home") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    } else if (page === "news") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 702, behavior: "smooth" });
      });
    } else if (page === "service") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 2063, behavior: "smooth" });
      });
    } else if (page === "app") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 5234, behavior: "smooth" });
      });
    } else if (page === "partner") {
      navigate("/partner");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, [page]);
  return (
    <NavWrapper ychange={ychange} animate={navAnimation}>
      <NavBox>
        <NavItem
          onClick={() => {
            setPage("home");
          }}
        >
          <img style={{ width: 120 }} src={require("../assets/logo.png")} />
          {page === "home" && <NavBottom layoutId="nav" />}
        </NavItem>
        <NavItem
          onClick={() => {
            setPage("news");
          }}
        >
          <NewsText page={page}>활용 사례</NewsText>
          {page === "news" ? <NavBottom /> : null}
        </NavItem>
        <NavItem
          onClick={() => {
            setPage("service");
          }}
        >
          <ServiceText page={page}>서비스 소개</ServiceText>
          {page === "service" && <NavBottom />}
        </NavItem>
        <NavItem
          onClick={() => {
            setPage("app");
          }}
        >
          <AppText page={page}>앱 소개</AppText>
          {page === "app" && <NavBottom />}
        </NavItem>

        <NavItem
          onClick={() => {
            setPage("partner");
          }}
        >
          <PartnerText page={page}>계약 문의</PartnerText>
          {page === "partner" && <NavBottom />}
        </NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Nav;
