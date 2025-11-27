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
    tech: "React, MySQL, JavaScript, Bootstrap",
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
    name: "E-Commerce Product Management System (Personal Project)",
    tech: "React, TypeScript, Free UI Template, Node.js (TypeScript), MongoDB, Socket.io",
    description:
      "Personal e-commerce platform similar to Flipkart workflows. Includes product listing, product details, add-to-cart, order placement, and admin product management. Integrated real-time notifications for order updates using sockets. Built with a responsive UI using a free React template.",
    role: "Developing full e-commerce workflow (products → cart → orders), building admin module, implementing backend APIs using Node.js & TypeScript, managing MongoDB collections, and integrating real-time order notifications using Socket.io. Project currently in active development.",
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
