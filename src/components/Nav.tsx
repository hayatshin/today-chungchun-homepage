import { Link, useMatch, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useAnimation } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";
import colors from "../colors";
import { ReactComponent as TitleIconSVG } from "../assets/title-icon-svg.svg";

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

  @media screen and (max-width: 1100px) {
    padding-bottom: 350px;
    border-bottom: ${(props) =>
      props.ychange >= 0 ? "1px solid #dfe6e9" : null};
  }
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
  }
`;

const NavImageTotalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;

  @media screen and (max-width: 1100px) {
    padding-top: 80px;
    width: 300px;
  }
`;

const NavLogoImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;

  @media screen and (max-width: 1100px) {
    padding-top: 80px;
    width: 300px;
  }
`;

const NavBox = styled.div`
  width: 70%;
  height: 100%;
  top: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: white;

  @media screen and (max-width: 1100px) {
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 100px;
  }
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
  background-color: white;

  @media screen and (max-width: 1100px) {
    padding-bottom: 20px;
  }
`;

interface MunuTextForm {
  page: string;
  ychange: number;
  location: string;
  firstY: number;
  secondY: number;
}

const HomeText = styled.span<MunuTextForm>`
  margin-bottom: 5px;
  font-size: 20px;
  color: ${(props) =>
    props.page === "news" ||
    (props.location === "/" && props.ychange < props.firstY)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "news" ||
    (props.location === "/" && props.ychange < props.firstY)
      ? "700"
      : "500"};

  @media screen and (max-width: 1100px) {
    font-size: 35px;
  }
`;

const ServiceText = styled.span<MunuTextForm>`
  margin-bottom: 5px;

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
      ? "700"
      : "500"};

  @media screen and (max-width: 1100px) {
    font-size: 35px;
  }
`;

const AppText = styled.span<MunuTextForm>`
  margin-bottom: 5px;

  font-size: 20px;
  color: ${(props) =>
    props.page === "app" ||
    (props.location === "/" && props.ychange >= props.secondY)
      ? colors.mainColor
      : colors.boldGray};
  font-weight: ${(props) =>
    props.page === "app" ||
    (props.location === "/" && props.ychange >= props.secondY)
      ? "700"
      : "500"};

  @media screen and (max-width: 1100px) {
    font-size: 35px;
  }
`;

const PartnerText = styled.span<MunuTextForm>`
  margin-bottom: 5px;

  color: ${(props) =>
    props.location === "/partner" ? colors.mainColor : colors.boldGray};
  font-size: 20px;
  font-weight: ${(props) => (props.location === "/partner" ? "700" : "500")};

  @media screen and (max-width: 1100px) {
    font-size: 35px;
  }
`;

const NavBottom = styled(motion.div)`
  width: 50%;
  height: 2px;
  background-color: #ff2d78;
  /* position: absolute;
  bottom: 1; */

  @media screen and (max-width: 1100px) {
    width: 0%;
  }
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
      console.log(scrollY.get());
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
      setFirstY(1610 - 5);
      setSecondY(2860 - 5);
    } else {
      // 웹
      setFirstY(1050 - 5);
      setSecondY(2025 - 5);
    }
  }, [screen]);

  const titleIconStyle = {
    width: "100%",
  };

  return (
    <NavWrapper ychange={ychange} animate={navAnimation}>
      <NavContainer>
        <NavImageTotalBox>
          <NavLogoImageBox>
            <TitleIconSVG style={titleIconStyle} />
          </NavLogoImageBox>
        </NavImageTotalBox>

        <NavBox>
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
                window.scrollTo({ top: firstY + 5, behavior: "smooth" });
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
                window.scrollTo({ top: secondY + 5, behavior: "smooth" });
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
      </NavContainer>
    </NavWrapper>
  );
}

export default Nav;
