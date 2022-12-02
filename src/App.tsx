import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Appintro from "./Routes/Appintro";
import Home from "./Routes/Home";
import Mail from "./Routes/Mail";
import Partner from "./Routes/Partner";
import Service from "./Routes/Service";

function App() {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="금연온, 금연ON, 비대면, 금연클리닉, 보건소, 금연, 노담, 금연사업, 금연앱,
          금연어플,
          금연플랫폼,
          금연치료,
          금연병원,
          rnadysdgs"
        />
        <meta
          name="title"
          content="금연 | 대한민국 | Untact시대의 비대면 금연클리닉, 금연온"
        />
        <meta
          name="description"
          content="비대면 금연클리닉 플랫폼 금연온으로 효율적인 금연 사업을 시작해보세요."
        />
        <meta property="og:site_name" content="금연온" />
        <meta
          property="og:title"
          content="금연 | 대한민국 | Untact시대의 비대면 금연클리닉, 금연온"
        />
        <meta property="og:image" content="../assets/room.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta
          name="og:description"
          content="비대면 금연클리닉 플랫폼 금연온으로 효율적인 금연 사업을 시작해보세요."
        />
        <meta name="og:url" content="https://www.no-smoking.kr/" />
        <link rel="apple-touch-icon" href="../assets/meta_img.png" />
      </Helmet>

      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/app" element={<Appintro />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
