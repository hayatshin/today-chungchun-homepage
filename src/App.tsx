import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./Routes/Home";
import Mail from "./Routes/Mail";
import News from "./Routes/News";
import Partner from "./Routes/Partner";
import Service from "./Routes/Service";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news" element={<News />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
