import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">
            Venkatesh <span className="text-sky-400">Muppidi</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-sky-400 transition-colors ${
                  isActive ? "text-sky-400" : "text-slate-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `hover:text-sky-400 transition-colors ${
                  isActive ? "text-sky-400" : "text-slate-300"
                }`
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `hover:text-sky-400 transition-colors ${
                  isActive ? "text-sky-400" : "text-slate-300"
                }`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-sky-400 transition-colors ${
                  isActive ? "text-sky-400" : "text-slate-300"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-sky-400 transition-colors ${
                  isActive ? "text-sky-400" : "text-slate-300"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-500 flex justify-between">
          <span>© {new Date().getFullYear()} Venkatesh Muppidi</span>
          <span>Built with React, TypeScript & Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
