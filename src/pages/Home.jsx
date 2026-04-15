import React from "react";
import SkillBadge from "../components/SkillBadge";

import ade from "../assets/ade.png";
import boye from "../assets/boye.png";
import pro from "../assets/pro.png";
import ade1 from "../assets/ade1.jpeg";

const projects = [
  {
    title: "🔐 Password Visibility Component",
    description:
      "Built a reusable password input component with toggle functionality to improve UX.",
    tech: ["React", "useState", "CSS"],
    image: null,
    link: "",
    githubLink: ""
  },
  {
    title: "📊 Interactive Counter Application",
    description:
      "Developed a simple state-based counter to understand React state management and dynamic UI updates.",
    tech: ["React", "JavaScript"],
    image: boye,
    link: "https://counter-phi-red.vercel.app/",
    githubLink: "https://github.com/boyecode/counter"
  },
  {
    title: "🌐 Meta About Page Clone",
    description:
      "Recreated Meta About page layout to practice responsive design and spacing.",
    tech: ["HTML", "CSS", "Responsive Design"],
    image: [ade, boye],
    link: "https://boyecode.github.io/META/",
    githubLink: "https://github.com/boyecode/META"
  },
];

const services = [
  "Landing Page Development",
  "Responsive Website Design",
  "React Web Applications",
  "Bug Fixing & UI Improvements",
  "API Integration",
  "Portfolio Websites",
];

const strengths = [
  "Clean and reusable React code",
  "Responsive design on all devices",
  "Fast delivery and good communication",
  "Modern UI with smooth interactions",
];

const Home = () => {
  return (
    <div id="home" className="text-white bg-[#0B1120]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 gap-10">

        <div className="md:w-1/2 space-y-6 text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold text-[#3B82F6]">
            Adeboye Bakare
          </h1>

          <p className="text-[#9CA3AF] text-lg leading-8">
            Frontend Developer building modern, responsive and user-friendly web
            applications using HTML, CSS, JavaScript and React.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <SkillBadge skill="HTML" />
            <SkillBadge skill="CSS" />
            <SkillBadge skill="JavaScript" />
            <SkillBadge skill="React" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-[#3B82F6] hover:bg-[#2563EB] hover:scale-105 transition px-6 py-3 rounded-lg text-black font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#3B82F6] hover:bg-[#3B82F6] hover:text-black hover:scale-105 transition px-6 py-3 rounded-lg"
            >
              Hire Me
            </a>

          </div>

        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={ade1}
            alt="Adeboye Bakare"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#3B82F6] shadow-[0_0_40px_#3B82F6]"
          />
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto text-center text-[#9CA3AF] leading-8 text-lg">
          I am a passionate frontend developer focused on building clean,
          responsive and interactive web experiences. I enjoy turning ideas into
          functional interfaces with React and modern web technologies.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 md:px-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1F2937] rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_30px_#3B82F6] transition"
            >

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-[#9CA3AF] mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#3B82F6] text-black px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.image && (
                <div className="flex flex-wrap gap-3 mb-4">

                  {Array.isArray(project.image) ? (
                    project.image.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    ))
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  )}

                </div>
              )}

              <div className="flex gap-3 mt-3">

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#3B82F6] hover:bg-[#2563EB] px-5 py-2 rounded-lg text-black font-semibold"
                  >
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-[#3B82F6] hover:bg-[#3B82F6] hover:text-black px-5 py-2 rounded-lg"
                  >
                    Code
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 md:px-12 bg-[#111827]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="bg-[#1F2937] p-6 rounded-xl text-center">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* WHY HIRE ME */}
      <section id="why-hire-me" className="py-20 px-6 md:px-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Hire Me
        </h2>

        <div className="max-w-4xl mx-auto grid gap-4">
          {strengths.map((item, i) => (
            <div key={i} className="bg-[#1F2937] p-5 rounded-xl">
              ✅ {item}
            </div>
          ))}
        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 md:px-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In Touch
        </h2>

        <form
          action="https://formsubmit.co/adeboyebakare6@gmail.com"
          method="POST"
          className="max-w-3xl mx-auto flex flex-col gap-6"
        >

          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-3 rounded-md bg-[#111827] border border-gray-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-3 rounded-md bg-[#111827] border border-gray-700 text-white"
          />

          <textarea
            name="message"
            placeholder="Enter your message"
            rows="5"
            className="p-3 rounded-md bg-[#111827] border border-gray-700 text-white"
          />

          <button className="bg-[#3B82F6] px-6 py-3 rounded-lg text-black font-semibold hover:scale-105 transition">
            Submit
          </button>

        </form>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">

          <a
            href="https://github.com/boyecode"
            target="_blank"
            rel="noreferrer"
            className="bg-[#3B82F6] px-6 py-3 rounded-lg text-black hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://wa.me/2349060615778"
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] px-6 py-3 rounded-lg text-black hover:scale-105 transition"
          >
            WhatsApp
          </a>

          <a
            href="mailto:adeboyebakare6@gmail.com"
            className="bg-[#3B82F6] px-6 py-3 rounded-lg text-black hover:scale-105 transition"
          >
            Email Me
          </a>

        </div>

      </section>

    </div>
  );
};

export default Home;