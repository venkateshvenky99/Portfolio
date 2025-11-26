import React from "react";

const profileImage = "/venkatesh.jpg"; // image placed in public folder

const ProfilePage: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>
      <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-start">
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Venkatesh Muppidi"
            className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover border-4 border-sky-500 shadow-lg shadow-sky-500/30"
          />
        </div>
        <div>
          <p className="text-slate-300 leading-relaxed mb-3">
            I am a software developer with a background in MCA and hands-on
            experience in CAD automation (NXOpen with C#), healthcare systems,
            and full stack web development. Currently, I work as a Junior
            Software Developer at Goprayaan, focusing on automation tools and
            healthcare platforms like H360 and MedWorld Expo.
          </p>
          <p className="text-slate-300 leading-relaxed mb-3">
            My strengths include breaking down complex workflows, designing
            clean database structures, and collaborating with cross-functional
            teams to deliver reliable, production-ready software. I enjoy
            working across the stack – from frontend (React, Tailwind, PHP
            UIs) to backend (Node.js, Express, PHP) and SQL databases.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I&apos;m looking for opportunities where I can combine my full stack
            skills with CAD automation or domain-heavy applications such as
            healthcare and manufacturing, and grow as a problem solver and
            engineer.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Quick Info</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="font-semibold mb-1 text-sky-400">Location</p>
            <p>Visakhapatnam / Bobbili, India</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="font-semibold mb-1 text-sky-400">Current Role</p>
            <p>Junior Software Developer at Goprayaan Pvt. Ltd.</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="font-semibold mb-1 text-sky-400">Education</p>
            <p>MCA – Rajah R.S.R.K. Rangarao College</p>
            <p className="text-xs text-slate-400">B.Sc (MPCs) – Aditya Degree College</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="font-semibold mb-1 text-sky-400">Focus Areas</p>
            <p>Full Stack Development, NXOpen Automation, Healthcare Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
