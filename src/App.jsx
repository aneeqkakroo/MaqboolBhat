import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollHandler from "./components/ScrollHandler.jsx";
import { Analytics } from '@vercel/analytics/react';

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Media from "./pages/Media.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";
import Bio from "./pages/Biography.jsx";
import LatestUpdates from "./pages/LatestUpdates.jsx";
import Quotations from "./pages/Quotations.jsx";
import SocialMedia from "./pages/SocialMedia.jsx";
  //Resource
import ResourcesHome from "./pages/Resource/ResourcesHome.jsx";
import Books from "./pages/Resource/Books.jsx";
import Articles from "./pages/Resource/Articles.jsx";
import Videos from "./pages/Resource/Videos.jsx";
import Letters from "./pages/Resource/Letters.jsx";
import Memoires from "./pages/Resource/Memoires.jsx";

// Optional: simple 404 component
function NotFound() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-white/70 mt-2">Page not found</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Analytics />
      <Navbar />
      <main className="pt-20">
        <ScrollHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/updates" element={<LatestUpdates />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/quotes" element={<Quotations />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/biography" element={<Bio />} />
          
          <Route path="/resources" element={<ResourcesHome />} />
          <Route path="/resources/books" element={<Books />} />
          <Route path="/resources/articles" element={<Articles />} />
          <Route path="/resources/videos" element={<Videos />} />
          <Route path="/resources/letters" element={<Letters />} />
          <Route path="/resources/memoires" element={<Memoires />} />
        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
