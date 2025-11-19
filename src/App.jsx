import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Recomposition from "./pages/Recomposition";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <BrowserRouter>
        <Navbar />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/recomposition" element={<Recomposition />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="max-w-7xl mx-auto px-4 py-20"><h1 className="text-3xl font-bold">Page not found</h1><p className="text-blue-200/80 mt-2">Return <Link to="/" className="underline">home</Link>.</p></div>} />
          </Routes>
        </main>
        <footer className="py-10 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200/70">
            <p>© {new Date().getFullYear()} Fit Castle — Dumai, Indonesia</p>
            <div className="flex items-center gap-4">
              <Link to="/membership" className="hover:text-white">Membership</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
