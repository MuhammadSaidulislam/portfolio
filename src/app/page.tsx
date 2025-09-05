"use client";
import Image from "next/image";
import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Facebook, Github, Linkedin, Search,
  Code, Server, Globe, Smartphone, Palette, Clock,
  Calendar, GraduationCap, Users, Brain, Zap, Lightbulb, MessageSquare, Crown
} from 'lucide-react';
import { SiCss3, SiRedux, SiBootstrap, SiFirebase, SiMysql, SiNodedotjs, SiExpress, SiTypescript, SiMongodb, SiGithub, SiNextdotjs, SiTailwindcss, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";



const portfolioData = [
  {
    "id": 1,
    "image": "/assets/images/portfolio/juno.png",
    "alt": "portfolio-02",
    "title": "Web Design",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://juno1.netlify.app/",
    "icon": "fa fa-search",
    "category": "user-interface"
  },
  {
    "id": 2,
    "image": "/assets/images/portfolio/demoFour.png",
    "alt": "portfolio-03",
    "title": "Web Design",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://e-schoolweb.netlify.app",
    "icon": "fa fa-search",
    "category": "user-interface"
  },
  {
    "id": 3,
    "image": "/assets/images/portfolio/crypto.png",
    "alt": "portfolio-04",
    "title": "Web Design",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://naughty-liskov-66a4e4.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 4,
    "image": "/assets/images/portfolio/cruptotwo.png",
    "alt": "portfolio-22",
    "title": "Web Design",
    "subtitle": "It's a full crupto website with multiple pages with HTML, CSS, JS, JQUERY",
    "link": "https://647d5a9ada391b1de52a1f53--courageous-bienenstitch-13e7a5.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 5,
    "image": "/assets/images/portfolio/score.png",
    "alt": "portfolio-05",
    "title": "Web Development",
    "subtitle": "It's very simple and clean full web design with HTML, CSS, JS, JQUERY",
    "link": "https://scorecarts.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 6,
    "image": "/assets/images/portfolio/saint.png",
    "alt": "portfolio-06",
    "title": "Web Development",
    "subtitle": "It's very simple and clean full web design with HTML, CSS, JS, JQUERY",
    "link": "https://saintxdmon.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 7,
    "image": "/assets/images/portfolio/demoOne.png",
    "alt": "portfolio-07",
    "title": "Web Design",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://mapinfo.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 9,
    "image": "/assets/images/portfolio/demoFive.png",
    "alt": "portfolio-09",
    "title": "PSD to HTML",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://penguindesign.netlify.app/",
    "icon": "fa fa-search",
    "category": "user-interface"
  },
  {
    "id": 10,
    "image": "/assets/images/portfolio/demoSix.png",
    "alt": "portfolio-10",
    "title": "Web Development",
    "subtitle": "Here you can make stylish name text with HTML, CSS, JS, JQUERY",
    "link": "https://stylishname.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 11,
    "image": "/assets/images/portfolio/denmentals.png",
    "alt": "portfolio-11",
    "title": "React Design",
    "subtitle": "It's very simple and clean landing page design with React, Bootstrap",
    "link": "https://denmentals.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 13,
    "image": "/assets/images/portfolio/music.png",
    "alt": "portfolio-13",
    "title": "Web Development",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://musicband1.netlify.app",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 14,
    "image": "/assets/images/portfolio/cruptoone.png",
    "alt": "portfolio-21",
    "title": "Web Development",
    "subtitle": "It's a full crypto currency website HTML, CSS, JS, JQUERY",
    "link": "https://647d73d33306802c6c2c9733--fascinating-squirrel-1035e4.netlify.app",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 15,
    "image": "/assets/images/portfolio/resturent.png",
    "alt": "portfolio-14",
    "title": "Web Development",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://hopeful-goodall-f2dc91.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 16,
    "image": "/assets/images/portfolio/dining.png",
    "alt": "portfolio-15",
    "title": "Web Development",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://japaness.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 17,
    "image": "/assets/images/portfolio/stage.png",
    "alt": "portfolio-16",
    "title": "PSD to HTML",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, Bootstrap, JS",
    "link": "https://admiring-mccarthy-9db1c5.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 18,
    "image": "/assets/images/portfolio/traffic.png",
    "alt": "portfolio-17",
    "title": "PSD to HTML",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://pedantic-cray-ac8830.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 19,
    "image": "/assets/images/portfolio/Ebook.png",
    "alt": "portfolio-18",
    "title": "PSD to HTML",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://jovial-goldberg-41c2fb.netlify.app",
    "icon": "fa fa-search",
    "category": "branding"
  },

  {
    "id": 21,
    "image": "/assets/images/portfolio/resturent1.png",
    "alt": "portfolio-20",
    "title": "PSD to HTML",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS",
    "link": "https://resturent1.netlify.app/",
    "icon": "fa fa-search",
    "category": "branding"
  },
  {
    "id": 23,
    "image": "/assets/images/portfolio/idtv.png",
    "title": "Music API data",
    "subtitle": "Here you can search the song and see the full song lyrics",
    "link": "https://classy-kleicha-d755e0.netlify.app",
  },
]



export default function Home() {

  const [activeTab, setActiveTab] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(9);


  const technicalSkills = [
    { name: "HTML5", icon: Globe, color: "from-orange-500 to-red-500" }, // No official HTML icon in react-icons
    { name: "CSS3", icon: SiCss3, color: "from-blue-500 to-indigo-500" },
    { name: "JavaScript", icon: Code, color: "from-yellow-400 to-amber-500" }, // No official JS icon used here
    { name: "Bootstrap", icon: SiBootstrap, color: "from-purple-600 to-violet-700" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "from-sky-400 to-blue-500" },
    { name: "React.js", icon: SiReact, color: "from-cyan-400 to-sky-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "from-green-600 to-emerald-500" },
    { name: "MongoDB", icon: SiMongodb, color: "from-emerald-500 to-green-700" },
    { name: "MySQL", icon: SiMysql, color: "from-blue-600 to-cyan-600" },
    { name: "Express.js", icon: SiExpress, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", icon: SiTypescript, color: "from-blue-600 to-indigo-700" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-black to-gray-800" },
    { name: "Redux", icon: SiRedux, color: "from-purple-500 to-indigo-600" },
    { name: "Git/GitHub", icon: SiGithub, color: "from-gray-800 to-black" },
    { name: "Firebase", icon: SiFirebase, color: "from-yellow-500 to-amber-600" },
  ];


  const softSkills = [
    { name: "Team Work", icon: Users },
    { name: "Problem Solving", icon: Brain },
    { name: "Fast Learner", icon: Zap },
    { name: "Adapt New Technologies", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Leadership", icon: Crown },
    { name: "Creativity", icon: Palette },
    { name: "Time Management", icon: Clock },
    { name: "Critical Thinking", icon: Search },
  ];

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "TypeScript",
    "REST API",
    "GraphQL",
  ];



  const filteredProjects = activeTab === 'all'
    ? portfolioData
    : portfolioData.filter(project => project.category === activeTab);

  const [active, setActive] = useState("home");

  const sections = ["home", "about", "skills", "experience", "contact"];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/MuhammadSaidulislam", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/md-saidul-islam-153b31150", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:saidulislamsaif789@email.com", label: "Gmail" },
    { Icon: Facebook, href: "https://www.facebook.com/md.saidul.islam.496655", label: "Facebook" },
    { Icon: Phone, href: "tel:+8801632663430", label: "Phone" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-7">
          <div className="flex justify-center">
            <div className="hidden md:flex space-x-10 text-xl font-semibold">
              {sections.map((sec) => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={() => setActive(sec)}
                  className={`relative pb-1 transition-colors ${active === sec
                    ? "text-blue-600 font-bold border-b-2 border-grey-600"
                    : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>


      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
                  MD Saidul Islam
                </span>
              </h1>

              <p className="text-xl font-medium text-blue-700 mb-6">Web Developer</p>

              {/* Stars + Location */}
              <div className="flex items-center space-x-4 mb-2">
                <Phone className="w-5 h-5 text-gray-700" />
                <a
                  href="tel:+8801632663430"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  +880 1632663430
                </a>
              </div>

              <div className="flex items-center space-x-4 mb-2">
                <Mail className="w-5 h-5 text-gray-700" />
                <a
                  href="mailto:saidulislamsaif789@gmail.com"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  saidulislamsaif789@gmail.com
                </a>
              </div>


              <div className="flex items-center space-x-4 mb-2">
                <div className="flex">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <span className="text-gray-700 font-medium">Pagla, Narayanganj, Bangladesh</span>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mb-8 mt-8">
                 {socialLinks.map(({ Icon, href, label }, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white shadow-md rounded-xl hover:bg-blue-50 transition"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-gray-700" />
            </motion.a>
          ))}
              </div>

              {/* Download CV */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button> */}
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src="/assets/images/portfolio_one.jpeg"
                    alt="MD Saiful Islam"
                    width={400}     // must set width
                    height={300}
                    className="w-full"
                  />
                </motion.div>

                {/* Floating Code Icon */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Code className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative overflow-hidden ">
                <div>
                  <div className="flex items-center mb-8">
                    <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
                  </div>

                  <div className="space-y-8">
                    {/* University */}
                    <div className="border-l-4 border-blue-600 pl-6 pb-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">2017 - 2021</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">United International University</h4>
                      <p className="text-gray-600 mt-2">
                        It&apos;s a reputed university in Bangladesh. I learned a lot of things from here.
                        These 4 years were very essential and career effective in my life.
                      </p>
                    </div>

                    {/* College */}
                    <div className="border-l-4 border-blue-600 pl-6 pb-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">2013 - 2015</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Hazi Misir Ali University & College</h4>
                      <p className="text-gray-600 mt-2">
                        I have completed my Higher Secondary study from this college.
                        My career guidance started from here.
                      </p>
                    </div>

                    {/* School */}
                    <div className="border-l-4 border-blue-600 pl-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">2004 - 2013</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">Pagla High School</h4>
                      <p className="text-gray-600 mt-2">
                        The road to freedom here and everywhere on earth.
                        My school life was very memorable and enjoyable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a <b className="text-md font-semibold">B.Sc. in Computer Science & Engineering</b> graduate and a dedicated
                <b className="text-md font-semibold"> Software Engineer</b>. Over the past 5+ years, I’ve been building
                modern, responsive, and scalable web applications using the latest technologies.
                My journey in tech has allowed me to combine problem-solving skills with creativity,
                resulting in software solutions that truly make an impact.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                I specialize in both <b className="text-md font-semibold">front-end and back-end development</b>,
                with strong expertise in React, Next.js, Node.js, and modern databases.
                I’m passionate about writing clean, maintainable code, and I always strive to create
                seamless user experiences.
                Outside of coding, I enjoy exploring new technologies and contributing to open-source projects.
              </p>


              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-1 text-md font-semibold text-black border-2 border-black rounded-sm shadow-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* What I Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What I Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Design</h3>
              <p className="text-gray-600">
                Creating visually appealing and user-friendly web designs that engage users
                and provide excellent user experience.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">
                Building responsive and scalable web applications using modern frameworks
                and technologies with clean, maintainable code.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Responsive Design</h3>
              <p className="text-gray-600">
                Ensuring all websites and applications work perfectly across all devices
                and screen sizes for optimal user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Skills</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-center">
                {technicalSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-3"
                    >
                      <motion.div
                        className={`p-6 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <span className="text-gray-800 font-semibold text-[12px]">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">What I’m Good At</h3>
              <div className="grid grid-cols-3 gap-8">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.span
                      key={index}
                      className="flex items-center flex-col text-center gap-3 px-5 py-5 rounded-sm bg-white text-blue-700 font-semibold shadow-md hover:bg-blue-200 cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-6 h-6" />
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Portfolio Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Portfolio</h2>
          <p className="text-gray-600 text-center mb-12">Here are some of my latest works</p>

          {/* Filter Tabs */}
          {/* <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-white rounded-full p-2 shadow-sm">
              {['all', 'web', 'mobile', 'design'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full capitalize transition-all ${activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div> */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <a href={project.link} target="_blank" className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt="MD Saiful Islam"
                    width={400}
                    height={400}
                    className="w-full h-58 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* <div className="absolute inset-0  group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      <button className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div> */}
                </a>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <motion.span
    whileHover={{ scale: 1.05 }}
    onClick={() => setVisibleProjects(prev => prev + 3)}
    className="px-10 py-4 cursor-pointer text-md font-semibold text-black border-2 border-black rounded-sm shadow-sm"
  >
    Load More Projects
  </motion.span>
</motion.div>

            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2888.2123826434727!2d90.45618807409733!3d23.665992892013985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM5JzU3LjYiTiA5MMKwMjcnMzEuNiJF!5e1!3m2!1sen!2sbd!4v1756550279256!5m2!1sen!2sbd" width="600" height="450" loading="lazy"></iframe>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-white py-8 text-center">
        <h2 className="text-7xl font-semibold">MD Saidul Islam</h2>
        <p className="text-gray-400">Frontend Developer | React | Next.js | TypeScript | Tailwind CSS | Redux | Bootstrap | HTML5 | CSS3 | JavaScript (ES6+)</p>

        <div className="mt-4 space-x-4 flex gap-4 justify-center">
          {socialLinks.map(({ Icon, href, label }, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white shadow-md rounded-xl hover:bg-blue-50 transition"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-gray-700" />
            </motion.a>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © 2022 Saidul Islam. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
