import React from "react";
import { Link } from "react-router-dom";

const profileImage = "/venkatesh.jpg";

const HomePage: React.FC = () => {
  return (
    <section className="py-10">
      <div className="grid md:grid-cols-[1.6fr,1fr] gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-sky-400 mb-3">
            Full Stack & NXOpen Automation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi, I&apos;m{" "}
            <span className="text-sky-400">Venkatesh Muppidi</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-6 max-w-xl">
            Full Stack Developer with experience in NXOpen automation (C# +
            Siemens NX), healthcare management systems, and enterprise web
            applications. I enjoy turning complex workflows into clean, practical
            software.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full border border-sky-500 bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-400 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="h-40 w-40 md:h-48 md:w-48 rounded-full bg-gradient-to-tr from-sky-500 to-violet-500 flex items-center justify-center text-center text-xs text-slate-900 font-semibold shadow-lg shadow-sky-500/40">
             <img
            src={profileImage}
            alt="Venkatesh Muppidi"
            className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover border-4 border-sky-500 shadow-lg shadow-sky-500/30"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
