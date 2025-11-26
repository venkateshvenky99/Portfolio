import React from "react";

type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
};

const experiences: Experience[] = [
  {
    company: "Goprayaan Pvt. Ltd.",
    location: "Visakhapatnam, India",
    role: "Junior Software Developer (Full Stack & NXOpen Automation)",
    period: "Feb 2025 – Present",
    points: [
      "Developing NXOpen automation tools using C# and Siemens NX for manufacturing and automotive clients.",
      "Contributed to a FORD vendor stamping automation project implementing curve projection, stamping-direction logic, and distance-based extrusion to reduce manual CAD effort.",
      "Worked on H360 Healthcare Management System (Out-Patient & In-Patient) using PHP, MySQL, HTML, CSS, jQuery, and Ajax.",
      "Implemented role-based authentication, admin dashboards, and real-time updates for queues, reports, and workflow status.",
      "Joined the MedWorld Expo project to extend healthcare modules for events and exhibitions.",
    ],
  },
  {
    company: "VulcanTechs",
    location: "Visakhapatnam, India",
    role: "Full Stack Intern – Visitor Management System (VMS)",
    period: "Nov 2024 – Jan 2025",
    points: [
      "Developed a web-based Visitor Management System (VMS) to automate visitor registration and approvals.",
      "Built core features using HTML, CSS, PHP, MySQL, Bootstrap, jQuery, Ajax, and JavaScript.",
      "Implemented QR code generation and scanning for secure visitor check-ins and tracking.",
      "Designed admin and reception dashboards for user management, reports, and approval workflows.",
    ],
  },
  {
    company: "DXC Technology",
    location: "Bengaluru, India",
    role: "Backup Administrator (IBM TSM + Dell EMC Networker)",
    period: "Aug 2022 – Jan 2024",
    points: [
      "Managed enterprise backup systems using IBM TSM and Dell EMC Networker for multiple clients.",
      "Performed data recovery, backup scheduling, monitoring, and reporting to improve system reliability.",
      "Worked with cross-functional teams to troubleshoot backup and storage issues.",
    ],
  },
];

const ExperiencePage: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-base font-semibold">{exp.company}</h3>
                <p className="text-xs text-slate-400">{exp.location}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-sky-400">{exp.role}</p>
                <p className="text-xs text-slate-400">{exp.period}</p>
              </div>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-300 list-disc list-inside">
              {exp.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;
