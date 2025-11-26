import React from "react";

type Project = {
  name: string;
  tech: string;
  description: string;
  role: string;
};

const projects: Project[] = [
  {
    name: "H360 Healthcare Management System (OP + IP)",
    tech: "PHP, MySQL, HTML, CSS, jQuery, Ajax",
    description:
      "End-to-end healthcare platform covering out-patient and in-patient workflows: registration, appointments, billing, diagnostics, reports, and discharge.",
    role: "Full stack development, database design, role-based access, dashboards, real-time updates.",
  },
  {
    name: "MedWorld Expo – Healthcare Exhibition Platform",
    tech: "PHP, MySQL, JavaScript, Bootstrap",
    description:
      "Platform for managing healthcare events and exhibitions with appointment scheduling, exhibitor management, and workflow automation.",
    role: "Developed modules for exhibitors, appointments, secure authentication, and admin views.",
  },
  {
    name: "Visitor Management System (VMS)",
    tech: "PHP, MySQL, Bootstrap, jQuery, Ajax",
    description:
      "Web-based VMS that automates visitor registration, approvals, QR-based check-ins, and reporting.",
    role: "Implemented visitor flows, dashboards, and Ajax-based real-time updates.",
  },
  {
    name: "Employee Management System",
    tech: "Node.js, Express.js, MySQL",
    description:
      "Application to manage employees, departments, and roles with secure CRUD operations and REST APIs.",
    role: "Backend API design, database schema, and integration with frontend.",
  },
  {
    name: "E-Commerce Website",
    tech: "PHP, MySQL, HTML, CSS",
    description:
      "Basic online store supporting product listing, cart management, and simple order workflow.",
    role: "Developed product management, cart logic, and database integration.",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col"
          >
            <h3 className="text-base font-semibold mb-1">{project.name}</h3>
            <p className="text-xs text-sky-400 mb-2">{project.tech}</p>
            <p className="text-sm text-slate-300 mb-2">{project.description}</p>
            <p className="text-xs text-slate-400 mt-auto">
              <span className="font-semibold">Role:</span> {project.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
