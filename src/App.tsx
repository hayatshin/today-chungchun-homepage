import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./Routes/Home";
import Partner from "./Routes/Partner";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function App() {
  return (
    <>
      <Helmet>
        <meta
          http-equiv="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;
          style-src 'self' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=';   style-src 'self' 'sha256-MBVp6JYxbC/wICelYC6eULCRpgi9kGezXXSaq/TS2+I=';"
        />
        <meta
          name="naver-site-verification"
          content="1f47b4b7082b49134a3bf766067f803124085faa"
        />
        <meta
          name="google-site-verification"
          content="jJ7nTNfr2pXhNOC_Stukpgvf2k-OrkUwGgdkvrPPMGc"
        />
        <meta property="og:type" content="website" />
        <title>오늘도청춘 | 세상에서 가장 쉬운 치매 예방 플랫폼</title>
        <meta
          name="title"
          content="오늘도청춘 | 세상에서 가장 쉬운 치매 예방 플랫폼"
        />
        <meta
          name="description"
          content="건강, 마음, 인지 관리를 한번에! 사용하기 쉬운 치매 예방 플랫폼"
        />
        <meta
          property="og:site_name"
          content="오늘도청춘 | 세상에서 가장 쉬운 치매 예방 플랫폼"
        />
        <meta property="og:url" content="https://onldocc.com" />
        <meta
          property="og:title"
          content="오늘도청춘 | 세상에서 가장 쉬운 치매 예방 플랫폼"
        />
        <meta property="og:image" content="%PUBLIC_URL%/pink-icon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* <meta property="og:url" content="https://www.no-smoking.kr" />  */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          name="og:description"
          content="건강, 마음, 인지 관리를 한번에! 사용하기 쉬운 치매 예방 플랫폼"
        />
        <link rel="apple-touch-icon" href="../assets/pink-icon.png" />
      </Helmet>

      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
