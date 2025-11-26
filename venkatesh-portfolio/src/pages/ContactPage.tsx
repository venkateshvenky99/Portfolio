import React from "react";

const ContactPage: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-slate-300 mb-4">
        Feel free to reach out for full stack roles, NXOpen automation work, or
        collaboration on healthcare and engineering products.
      </p>
      <div className="space-y-2 text-sm text-slate-200 mb-8">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:venkateshmuppidi225@gmail.com"
            className="text-sky-400 hover:underline"
          >
            venkateshmuppidi225@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold">Phone:</span> +91-6304885522
        </p>
        <p>
          <span className="font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/venkatesh-muppidi-6191a9257"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:underline"
          >
            linkedin.com/in/venkatesh-muppidi-6191a9257
          </a>
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 max-w-md">
        <p className="text-sm text-slate-300 mb-2">
          You can also describe a simple contact form here later (Name, Email,
          Message) and connect it to an email service or backend when you&apos;re
          ready.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
