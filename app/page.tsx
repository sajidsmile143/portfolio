'use client';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react"; // Added ExternalLink
import { motion, useScroll, useTransform } from "framer-motion";

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const ellipseScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
  const ellipseOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

  const projects = [
    {
      title: "eJuno",
      description:
        "An Italy-based modern and elegant wedding platform crafted to simplify event planning. Features a sleek UI and robust backend for a seamless user experience.",
      image: "/ejuno.jpeg",
      tags: ["React.Js", "Tailwind CSS", "Node.js", "TypeScript", "Express", "MongoDB"],
      live: "https://ejuno.io",
    },
    {
      title: "Woooo.World",
      description:
        "A global connectivity platform aimed at bringing people and ideas together from around the world through a responsive and engaging interface.",
      image: "/woo.jpeg",
      tags: ["React.Js", "Tailwind CSS", "Bootstrap", "HTML"],
      live: "http://woooo.world/",
    },
    {
      title: "FileLink",
      description:
        "A sleek and privacy-focused file-sharing platform inspired by WeTransfer. Enables instant file uploads and sharing with no sign-up required.",
      image: "/fileLink.png",
      tags: ["React", "Next.js", "Tailwind CSS", "Supabase", "TypeScript", "AI"],
      github: "https://github.com/sajidsmile143/fileLink",
      live: "https://www.filelink.icu/",
    },
    {
      title: "Modern Portfolio",
      description:
        "A stylish and interactive developer portfolio showcasing projects, animations, and technical skills with a modern touch.",
      image: "/portfolio.jpeg",
      tags: ["React", "Tailwind CSS", "Motion", "TypeScript", "GSAP"],
      github: "https://github.com/sajidsmile143?tab=repositories",
      live: "https://sajidbhatti-portfolio.vercel.app/",
    },
    {
      title: "Budget Tracker",
      description: "A lightweight and intuitive JavaScript-based application to help users track income and expenses effectively.",
      image: "/budget.jpeg",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sajidsmile143?tab=repositories",
      live: "https://budget-tracker-sigma-sandy.vercel.app/",
    },
    {
      title: "ElectraLith",
      description: "A futuristic web platform for lithium production. Built for scalability and performance to support industrial innovation.",
      image: "/electraLith.jpeg",
      tags: ["React", "Tailwind CSS", "Node.js", "JavaScript"],
      github: "https://github.com/sajidsmile143?tab=repositories",
      live: "https://www.electralith.com/",
    },
    {
      title: "Weather App",
      description: "A real-time weather application providing accurate forecasts and global weather updates with animated UI elements.",
      image: "/weather.jpeg",
      tags: ["React", "GSAP", "Tailwind CSS", "API Integration"],
      github: "https://github.com/sajidsmile143/Weather-app",
      live: "https://weather-app-six-psi-95.vercel.app/",
    },
    {
      title: "Landing Page – Property Panorama",
      description: "A modern and dynamic landing page for a real estate platform, featuring smooth animations and responsive design.",
      image: "/property.jpeg",
      tags: ["React", "GSAP", "Tailwind CSS", "API Integration"],
      github: "https://github.com/sajidsmile143/Weather-app", // Consider correcting if different
      live: "https://landingpage-propertypanorama.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-600">Sajid</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-purple-600 transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-purple-600 transition-colors">
                Skills
              </a>
              <a href="#work" className="text-gray-300 hover:text-purple-600 transition-colors">
                Work
              </a>
              <a href="#projects" className="text-gray-300 hover:text-purple-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
            style={{
              clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-purple-400 text-lg">Hi myself</p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">Muhammad Sajid Bhatti</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl lg:text-3xl font-light">{"{"}</span>
                  <span className="text-xl lg:text-2xl text-gray-300 tracking-wider">MERN STACK DEVELOPER</span>
                  <span className="text-2xl lg:text-3xl font-light">{"}"}</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                Specialized in building exceptional, digital experienced MERN-STACK Web Applications.
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 px-8 py-3 text-lg"
                onClick={() => (window.location.hash = "#work")}
              >
                View Work →
              </Button>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-purple-500 overflow-hidden bg-white"
                  style={{ scale: ellipseScale, opacity: ellipseOpacity }}
                >
                  <Image
                    src="/profile.png"
                    alt="Muhammad Sajid Bhatti"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 border-2 border-purple-400 rounded-full"
                  style={{ scale: ellipseScale, opacity: ellipseOpacity }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 space-y-4">
          <a
            href="https://www.linkedin.com/in/hafiz-muhammad-sajid-692082221/"
            className="block p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/sajidsmile143"
            className="block p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github size={20} />
          </a>
          <a href="#" className="block p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Mail size={20} />
          </a>
          <a href="#" className="block p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Phone size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hi, I'm Sajid, nice to meet you. Please take a look around. I am passionate about building excellent
              Websites & Web Applications with 4 years of experience according to clients requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
            <p className="text-gray-300">These are the technologies I've worked with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { skill: "HTML5", icon: "🏷️" },
              { skill: "CSS3", icon: "🎨" },
              { skill: "Tailwind", icon: "🌬️" },
              { skill: "JavaScript", icon: "💻" },
              { skill: "React", icon: "⚛️" },
              { skill: "Redux", icon: "🔧" },
              { skill: "Next.js", icon: "🚀" },
              { skill: "Axios", icon: "📡" },
              { skill: "Node.js", icon: "🌳" },
              { skill: "MongoDB", icon: "🗃️" },
              { skill: "SQL", icon: "🗃️" },
              { skill: "Firebase", icon: "🔥" },
              { skill: "GitHub", icon: "💾" },
            ].map(({ skill, icon }) => (
              <div key={skill} className="text-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-400 font-bold text-2xl">{icon}</span>
                </div>
                <h3 className="font-semibold text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">MERN STACK DEVELOPER</h3>
              <p className="text-gray-300">Skylynx Technologies - Oct 2022 - Present</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Developed MERN stack applications, dedicating 40 hours weekly for on-time project delivery.</li>
                <li>Created responsive UI using React, Next.js, ensuring pixel-perfect designs across devices.</li>
                <li>Reviewed code collaboratively, providing valuable feedback and promoting a teamwork environment.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Software Engineer (REACT.JS)</h3>
              <p className="text-gray-300">W GROUP - January 2021 - Oct 2022</p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Developed highly maintainable, reusable UI components to enhance application scalability.</li>
                <li>Converted static websites into dynamic web applications using HTML, CSS, ReactJS, and Tailwindcss.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-300">Check out some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="bg-purple-600 text-white" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        View Live
                      </a>
                    </Button>
                    {project.github && (
                      <Button variant="outline" size="sm" className="bg-purple-600 text-white" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-300">Submit the form below or shoot me an email - sajidsmile143@gmail.com</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  ></textarea>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">Let's Collaborate</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Muhammad Sajid Bhatti</h3>
            <p className="text-gray-400 mb-6">MERN Stack Developer</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">© 2025 Muhammad Sajid Bhatti. All rights reserved.</p>
              <p className="text-gray-400 mt-2">Last Updated: June 26, 2025, 02:07 AM PKT</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}