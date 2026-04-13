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
    link: "https://yourprojectlink.com/password-toggle",
  },
  {
    title: "📊 Interactive Counter Application",
    description:
      "Developed a simple state-based counter to understand React state management and dynamic UI updates.",
    tech: ["React", "JavaScript"],
    image: pro,
    link: "https://yourprojectlink.com/counter-app",
  },
  {
    title: "🌐 Meta About Page Clone",
    description:
      "Recreated Meta About page layout to practice responsive design and spacing.",
    tech: ["HTML", "CSS", "Responsive Design"],
    image: [ade, boye],
    link: "https://yourprojectlink.com/meta-clone",
  },
];

const testimonials = [
  { text: "Amazing developer. Delivered project on time.", name: "Mrs Alabi" },
  {
    text: "Very professional and creative. Highly recommended.",
    name: "Pst James",
  },
  {
    text: "Great attention to detail and excellent communication.",
    name: "Mr Okeke",
  },
];

const Home = () => {
  return (
    <div id="home" className="relative text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-20">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#3B82F6]">
            Adeboye Bakare
          </h1>

          <p className="text-[#9CA3AF] text-lg">
            Frontend Developer building modern, responsive web apps using HTML,
            CSS, JavaScript, and React.
          </p>

          <div className="flex flex-wrap gap-3">
            <SkillBadge skill="HTML" />
            <SkillBadge skill="CSS" />
            <SkillBadge skill="JavaScript" />
            <SkillBadge skill="React" />
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-2 rounded-lg text-black transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/boyecode"
              target="_blank"
              rel="noreferrer"
              className="bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-2 rounded-lg text-black transition"
            >
              GitHub
            </a>

            <a
              href="mailto:adeboyebakare6@gmail.com"
              className="bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-2 rounded-lg text-black transition"
            >
              Email Me
            </a>

            <a
              href="https://wa.me/2349060615778?text=Hello%20I%20saw%20your%20portfolio"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5d] px-6 py-2 rounded-lg text-black transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <img
            src={ade1}
            alt="profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-[#3B82F6]"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="animate-pulse-slow bg-gradient-to-r from-[#3B82F6]/20 via-[#2563EB]/20 to-[#60A5FA]/20 absolute w-full h-full rounded-full"></div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-5 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-[#1F2937] rounded-xl p-6 hover:scale-105 hover:shadow-[0_0_30px_#3B82F6] transition"
            >
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-[#9CA3AF] mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#3B82F6] text-black px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-2 rounded-lg text-black transition w-fit"
                >
                  View Project
                </a>
              </div>

              {project.image && (
                <div className="md:w-1/2 flex flex-wrap gap-4 justify-center">
                  {Array.isArray(project.image) ? (
                    project.image.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
                      />
                    ))
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-5 md:px-10 bg-[#111827]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1F2937] p-6 rounded-xl shadow-md hover:scale-105 transition"
            >
              <p className="text-[#9CA3AF] mb-4">"{t.text}"</p>
              <h4 className="text-[#3B82F6] font-semibold text-right">
                - {t.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-5 md:px-10">
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
          ></textarea>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <button className="bg-[#3B82F6] px-6 py-3 rounded-lg text-black">
              Submit
            </button>

            <a
              href="https://github.com/boyecode"
              target="_blank"
              rel="noreferrer"
              className="bg-[#3B82F6] px-6 py-3 rounded-lg text-black"
            >
              GitHub
            </a>

            <a
              href="https://wa.me/2349060615778?text=Hello%20I%20want%20to%20contact%20you"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] px-6 py-3 rounded-lg text-black"
            >
              WhatsApp
            </a>

            <a
              href="mailto:adeboyebakare6@gmail.com"
              className="bg-[#3B82F6] px-6 py-3 rounded-lg text-black"
            >
              Email Me
            </a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
