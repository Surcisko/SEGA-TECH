import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/pages/Landing-page";
import { Products } from "./components/pages/Products";
import { Blog } from "./components/pages/Blog";
import { Clients } from "./components/pages/Clients";
import { Partners } from "./components/pages/Partners";

// import { Hero } from "./components/pages/Hero";
// import { Products } from "./components/pages/Products";
// import { Blog } from "./components/pages/Blog";
// import { Clients } from "./components/pages/Clients";
// import { Partners } from "./components/pages/Partners";
// max-w-6xl w-full mx-auto
function App() {
  return (
    <div className="relative bg-white min-h-screen">
      <Router>
        <Nav />

        <div className="w-full max-w-8xl mx-auto px-6 md:px-0  mt-5  pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
