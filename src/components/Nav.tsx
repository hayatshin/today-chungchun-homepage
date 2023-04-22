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
  width: 80%;
  height: 100%;
  top: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
  firstY: number;
  secondY: number;
}

const HomeText = styled.span<MunuTextForm>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "news" ||
    (props.location === "/" && props.ychange < props.firstY)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "news" ||
    (props.location === "/" && props.ychange < props.firstY)
      ? "500"
      : "400"};
`;

const ServiceText = styled.span<MunuTextForm>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "service" ||
    (props.location === "/" &&
      props.ychange >= props.firstY &&
      props.ychange < props.secondY)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "service" ||
    (props.location === "/" &&
      props.ychange >= props.firstY &&
      props.ychange < props.secondY)
      ? "500"
      : "400"};
`;

const AppText = styled.span<MunuTextForm>`
  font-size: 20px;
  color: ${(props) =>
    props.page === "app" ||
    (props.location === "/" && props.ychange >= props.secondY)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "app" ||
    (props.location === "/" && props.ychange >= props.secondY)
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
  background-color: #ff2d78;
  position: absolute;
  bottom: 0;
`;

function Nav() {
  const [screen, setScreen] = useState(window.innerWidth);

  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [ychange, setYchange] = useState(0);
  const navAnimation = useAnimation();
  const [page, setPage] = useState("home");
  const [firstY, setFirstY] = useState(0);
  const [secondY, setSecondY] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setScreen(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setScreen(window.innerWidth));
    };
  }, []);

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

  useEffect(() => {
    if (screen < 1000) {
      // 모바일
      setFirstY(860);
      setSecondY(2139);
    } else {
      // 웹
      setFirstY(880);
      setSecondY(2697);
    }
  }, [screen]);

  useEffect(() => {}, [firstY, secondY]);

  return (
    <NavWrapper ychange={ychange} animate={navAnimation}>
      <NavBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: 120 }}
            src={require("../assets/title-icon.png")}
          />
        </div>

        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            });
          }}
        >
          <HomeText
            page={page}
            ychange={ychange}
            location={location}
            firstY={firstY}
            secondY={secondY}
          >
            오늘도청춘
          </HomeText>
          {location === "/" && ychange < firstY ? <NavBottom /> : null}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: firstY, behavior: "smooth" });
            });
          }}
        >
          <ServiceText
            page={page}
            ychange={ychange}
            location={location}
            firstY={firstY}
            secondY={secondY}
          >
            서비스 소개
          </ServiceText>
          {page === "service" ||
          (location === "/" && ychange >= firstY && ychange < secondY) ? (
            <NavBottom />
          ) : null}
        </NavItem>
        <NavItem
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: secondY, behavior: "smooth" });
            });
          }}
        >
          <AppText
            page={page}
            ychange={ychange}
            location={location}
            firstY={firstY}
            secondY={secondY}
          >
            앱 소개
          </AppText>
          {page === "app" || (location === "/" && ychange >= secondY) ? (
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
          <PartnerText
            page={page}
            ychange={ychange}
            location={location}
            firstY={firstY}
            secondY={secondY}
          >
            계약 문의
          </PartnerText>
          {location === "/partner" && <NavBottom />}
        </NavItem>
      </NavBox>
    </NavWrapper>
  );
}

export default Nav;
