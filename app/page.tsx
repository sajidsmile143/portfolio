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
      title: "eJuno – Wedding Planning Platform",
      description:
        "Multi-portal wedding services marketplace — vendors, couples, and admin portals with real-time bookings and financial reporting.",
      image: "/ejuno.jpeg",
      tags: ["React.js", "Redux", "RTK Query", "Node.js", "MongoDB", "REST API", "JWT Auth"],
      live: "https://ejuno.io",
    },
    {
      title: "InSynQIQ – Enterprise SaaS Platform",
      description:
        "Production-grade SaaS with enterprise PostgreSQL architecture, SSR via Next.js, full auth system with refresh tokens and role permissions.",
      image: "/insynqiq.png",
      tags: ["Next.js", "React.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/sajidsmile143",
      live: "https://insynqiq.io/",
    },
    {
      title: "AI & LLM Automation Suite",
      description:
        "Al-powered tools for real clients — chatbots with memory, document summarization (60% time saved), and workflow automation with LLM APIs.",
      image: "/ai-automation.png",
      tags: ["OpenAI API", "Node.js", "Next.js", "LangChain", "Prompt Engineering"],
      github: "https://github.com/sajidsmile143",
      live: "https://sajid-portfolio-ten.vercel.app/",
    },
    {
      title: "DevSwipe — The Tinder for Developers",
      description:
        "The ultimate platform for developers to swipe, connect, and collaborate on groundbreaking projects. Features real-time matching and project discovery.",
      image: "/DevSwipe.png",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Appwrite", "Framer Motion"],
      github: "https://github.com/sajidsmile143",
      live: "https://dev-swipe-eight.vercel.app/",
    },
    {
      title: "MediPrime — Modern Pharmacy Solutions",
      description:
        "A premium healthcare platform for medicine discovery, prescription uploads, and pharmacy management. Designed for seamless user experience and health tracking.",
      image: "/mediprime.png",
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Lucide Icons"],
      github: "https://github.com/sajidsmile143",
      live: "https://mediprime-sage.vercel.app/",
    },
    {
      title: "Invoicing & Billing System",
      description:
        "Full invoicing system with PDF export, tax handling, payment tracking, client records, and revenue analytics dashboard.",
      image: "/invoicing.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/sajidsmile143",
      live: "https://invoicing-front.web.app/",
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
      github: "https://github.com/sajidsmile143/Weather-app",
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
                Experience
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
      <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
            style={{
              clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-purple-400 text-lg">Hi myself</p>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">Muhammad Sajid</h1>
                <div className="space-y-2">
                  <h2 className="text-xl lg:text-2xl font-semibold text-purple-400">
                    Full-Stack Engineer | AI Agent Developer | MERN & Next.js Expert
                  </h2>
                  <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                    Experienced MERN Stack Developer with 3+ years of professional experience building scalable web applications, implementing RESTful APIs, integrating AI & LLM solutions.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                {[
                  { label: "YEARS EXP", value: "3+" },
                  { label: "COMPANIES", value: "3" },
                  { label: "PROJECTS", value: "10+" },
                  { label: "SPECIALIST", value: "AI/LLM" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] text-gray-400 tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/20"
                  onClick={() => (window.location.hash = "#projects")}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 transition-all duration-300 px-8 py-6 text-lg rounded-xl"
                  asChild
                >
                  <a href="https://upwork.com/fl/~01b8045f4aed99cd16" target="_blank" rel="noopener noreferrer">
                    Hire on Upwork
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div
                  className="w-72 h-72 lg:w-96 lg:h-96 rounded-3xl border-2 border-gray-700 overflow-hidden bg-gray-800 rotate-3 hover:rotate-0 transition-transform duration-500"
                  style={{ scale: ellipseScale, opacity: ellipseOpacity }}
                >
                  <Image
                    src="/profile.png"
                    alt="Muhammad Sajid"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -left-6 bg-purple-600 p-4 rounded-2xl shadow-xl">
                  <div className="text-sm font-bold text-white">Available for Freelance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="fixed right-6 bottom-10 z-20 space-y-4">
          <a
            href="https://linkedin.com/in/muhammad-sajid"
            className="block p-3 bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:text-white rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/sajidsmile143"
            className="block p-3 bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:text-white rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:sajidsmile143@gmail.com"
            className="block p-3 bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:text-white rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Experienced MERN Stack Developer with 3+ years of professional experience building scalable web applications.
              I specialize in architecting production-grade systems, implementing RESTful APIs, and integrating cutting-edge
              AI & LLM solutions to automate complex workflows. Available for freelance projects worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-400">A comprehensive toolkit of modern web and AI technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React.js", "Next.js", "TypeScript", "Redux/RTK", "Tailwind CSS", "HTML5/CSS3"]
              },
              {
                category: "Backend",
                skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "PostgreSQL", "MongoDB"]
              },
              {
                category: "AI & Automation",
                skills: ["LLM Integration", "OpenAI API", "LangChain", "AI Chatbots", "Prompt Engineering"]
              },
              {
                category: "DevOps & Tools",
                skills: ["Git/GitHub", "Docker", "Vercel", "Prisma ORM", "Agile/SCRUM"]
              },
            ].map((cat) => (
              <div key={cat.category} className="p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-colors">
                <h3 className="text-purple-400 font-bold mb-4 uppercase tracking-wider text-sm">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          </div>
          <div className="space-y-12">
            {[
              {
                role: "Associate Software Engineer",
                company: "Skylinx, Lahore",
                period: "Mar 2024 – Present",
                points: [
                  "Leading end-to-end development of MERN-based production systems for enterprise clients with high-traffic workloads.",
                  "Architecting and integrating AI & LLM APIs (OpenAI, custom models) for intelligent automation, smart search, and conversational features.",
                  "Designing optimized MongoDB & PostgreSQL schemas — reduced query response times by 35%+ through strategic indexing.",
                  "Establishing code quality standards, conducting peer reviews, and enforcing engineering best practices across the team."
                ]
              },
              {
                role: "MERN Stack Developer",
                company: "Zeta Enterprises, Lahore",
                period: "Sep 2022 – Feb 2024",
                points: [
                  "Built and maintained 3+ scalable full-stack applications using React.js, Node.js, and MongoDB for enterprise clients.",
                  "Designed RESTful API architecture, admin dashboards, and analytics panels with complex business logic and RBAC.",
                  "Improved application performance by 40%+ through MongoDB query optimization, lazy loading, and caching strategies.",
                  "Coordinated with designers, QA, and PMs on seamless production deployments and bi-weekly release cycles."
                ]
              },
              {
                role: "MERN Stack Developer",
                company: "W Group, Lahore",
                period: "Jan 2021 – Aug 2022",
                points: [
                  "Built production-ready React.js interfaces and Node.js/Express.js REST APIs for client-facing web products.",
                  "Worked with MongoDB — implementing schemas, aggregations, and data validation for dynamic applications.",
                  "Developed reusable React component libraries and custom hooks, reducing development time by 20% across team.",
                  "Delivered multiple product modules on time in a fast-paced Agile development environment."
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="relative pl-8 border-l border-gray-700">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[8.5px] top-2 shadow-lg shadow-purple-500/50" />
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-4">
                  <span className="text-purple-400 font-semibold">{exp.company}</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-400 text-sm italic">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed flex gap-2">
                      <span className="text-purple-500 mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
      <footer className="relative bg-gray-950 text-white py-16 border-t border-gray-800 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Muhammad Sajid</h3>
              <p className="text-gray-400 max-w-xs">Full-Stack Engineer specialized in building high-performance web applications and AI solutions.</p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/muhammad-sajid" className="text-gray-500 hover:text-purple-400 transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/sajidsmile143" className="text-gray-500 hover:text-purple-400 transition-colors">
                  <Github size={22} />
                </a>
                <a href="mailto:sajidsmile143@gmail.com" className="text-gray-500 hover:text-purple-400 transition-colors">
                  <Mail size={22} />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Navigation</h4>
              <ul className="grid grid-cols-2 gap-2 text-gray-400">
                <li><a href="#home" className="hover:text-purple-400">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400">About</a></li>
                <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
                <li><a href="#work" className="hover:text-purple-400">Experience</a></li>
                <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2"><Mail size={16} className="text-purple-500" /> sajidsmile143@gmail.com</li>
                <li className="flex items-center gap-2"><Phone size={16} className="text-purple-500" /> 0304-8338844</li>
                <li className="flex items-center gap-2"><ExternalLink size={16} className="text-purple-500" /> Lahore, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Muhammad Sajid. All rights reserved.</p>
            <p className="text-gray-600 text-xs">Architected with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}