"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import {
  Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin,
  Code, Palette, Database, Server, Globe, Smartphone,
  Calendar, Award, GraduationCap, Briefcase, User, Grid3X3,
  ChevronRight, Star, Eye, Users, Brain, Zap, Lightbulb, MessageSquare, Crown
} from 'lucide-react';
import { motion } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  skill: string;
}


// [
//   {
//     "id": 1,
//     "image": "assets/images/portfolio/songlyrics.png",
//     "title": "Music API data",
//     "subtitle": "Here you can search the song and see the full song lyrics",
//     "link": "https://songlyricsweb.netlify.app/",
//   },
//   {
//     "id": 2,
//     "image": "assets/images/portfolio/project2.png",
//     "alt": "portfolio-02",
//     "title": "E-commerce Website",
//     "subtitle": "A modern online store with cart and checkout",
//     "link": "https://example-ecommerce.netlify.app/",
//     "icon": "fa fa-shopping-cart",
//     "category": "web"
//   },
//   {
//     "id": 3,
//     "image": "assets/images/portfolio/project3.png",
//     "alt": "portfolio-03",
//     "title": "Blog Platform",
//     "subtitle": "Publish and share your thoughts easily",
//     "link": "https://example-blog.netlify.app/",
//     "icon": "fa fa-pencil",
//     "category": "branding"
//   }
// ]

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
    "id": 8,
    "image": "/assets/images/portfolio/royal-rooftop-club.png",
    "alt": "portfolio-08",
    "title": "React Design",
    "subtitle": "It's very simple and clean landing page design with React, Bootstrap",
    "link": "https://royal-rooftop-club.netlify.app/",
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
    "id": 12,
    "image": "/assets/images/portfolio/expectro.png",
    "alt": "portfolio-12",
    "title": "Web Development",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS, JS, JQUERY",
    "link": "https://expectrodev.com/",
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
    "id": 20,
    "image": "/assets/images/portfolio/bikerland.png",
    "alt": "portfolio-19",
    "title": "PSD to HTML",
    "subtitle": "It's very simple and clean landing page design with HTML, CSS",
    "link": "https://bikerlandlive.netlify.app/",
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
    "id": 22,
    "image": "/assets/images/portfolio/songlyrics.png",
    "title": "Music API data",
    "subtitle": "Here you can search the song and see the full song lyrics",
    "link": "https://songlyricsweb.netlify.app/",
  },
]



export default function Home() {

  const [activeTab, setActiveTab] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(9);

  // Circular progress component
  const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, skill }) => {
    const radius = 45;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-3">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            <circle
              stroke="#e5e7eb"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#3b82f6"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-800">{percentage}%</span>
          </div>
        </div>
        <span className="text-sm font-medium text-gray-600 text-center">{skill}</span>
      </div>
    );
  };

  const technicalSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'React.js', level: 92 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 80 },
  ];

  const professionalSkills = [
    { name: 'Web Design', level: 90 },
    { name: 'Web Development', level: 95 },
    { name: 'Graphic Design', level: 75 },
    { name: 'SEO', level: 80 }
  ];
  const softSkills = [
    { name: "Team Work", icon: Users },
    { name: "Problem Solving", icon: Brain },
    { name: "Fast Learner", icon: Zap },
    { name: "Adapt New Technologies", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Leadership", icon: Crown },
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

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      description: 'Modern e-commerce solution with payment integration'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      description: 'Secure banking application with biometric authentication'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      description: 'Real-time analytics dashboard with data visualization'
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      description: 'Responsive restaurant website with online ordering'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      description: 'Health and fitness tracking mobile application'
    },
    {
      id: 6,
      title: 'Corporate Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop',
      description: 'Complete branding solution for tech startup'
    },
    {
      id: 7,
      title: 'Task Management Tool',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      description: 'Collaborative project management platform'
    },
    {
      id: 8,
      title: 'Weather App UI',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
      description: 'Beautiful weather application interface design'
    },
    {
      id: 9,
      title: 'Social Media Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      description: 'Social media management and analytics tool'
    },
    {
      id: 10,
      title: 'Travel Booking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      description: 'Travel booking and itinerary planning application'
    },
    {
      id: 11,
      title: 'Blog Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c1d273?w=400&h=300&fit=crop',
      description: 'Modern blogging platform with CMS features'
    },
    {
      id: 12,
      title: 'Logo Design Collection',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
      description: 'Collection of professional logo designs'
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? portfolioData
    : portfolioData.filter(project => project.category === activeTab);

  const [active, setActive] = useState("home");

  const sections = ["home", "about", "skills", "experience", "portfolio", "contact"];


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
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
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
                  MD Saiful Islam
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
                {[Github, Linkedin, Mail, Phone].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-3 bg-white shadow-md rounded-xl hover:bg-blue-50 transition"
                    href="#"
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
                    src="/assets/images/portfolio/cruptoone.png"
                    alt="MD Saiful Islam"
                    width={400}     // must set width
                    height={300}
                    className="w-full h-full object-cover"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://undraw.co/api/illustrations/code_thinking.svg"
                  alt="Coding Illustration"
                  className="w-full h-full object-contain"
                />
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
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    {/* Skill Label */}
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">What I’m Good At</h3>
              <div className="grid grid-cols-2 gap-8">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.span
                      key={index}
                      className="flex items-center flex-col gap-3 px-5 py-5 rounded-sm bg-white text-blue-700 font-semibold shadow-md hover:bg-blue-200 cursor-default"
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

      {/* Experience & Education */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2018 - 2022</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">University Name, Bachelor Degree</h4>
                  <p className="text-gray-600 mt-2">
                    Computer Science and Engineering - Specialized in web technologies,
                    software engineering, and database management systems.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2020 - 2021</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">College Name, Web Development</h4>
                  <p className="text-gray-600 mt-2">
                    Advanced web development course focusing on modern JavaScript frameworks,
                    responsive design, and full-stack development.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2019</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">School Name, React Native</h4>
                  <p className="text-gray-600 mt-2">
                    Mobile app development specialization using React Native framework
                    for cross-platform mobile applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">Experience</h3>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-green-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Web Design & Development Dept.</h4>
                  <p className="text-blue-600 mb-2">Senior Developer</p>
                  <p className="text-gray-600">
                    Leading development of complex web applications, mentoring junior developers,
                    and implementing best practices for scalable architecture.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2021 - 2022</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Freelancer Department, Engineering</h4>
                  <p className="text-blue-600 mb-2">Full Stack Developer</p>
                  <p className="text-gray-600">
                    Developed custom web solutions for various clients, specializing in
                    e-commerce platforms and business management systems.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">2020 - 2021</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Intern Department, Front-end Developer</h4>
                  <p className="text-blue-600 mb-2">Junior Developer</p>
                  <p className="text-gray-600">
                    Started career as junior developer, learned industry standards,
                    and contributed to multiple client projects using modern frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
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
                <a href={project.link} className="relative overflow-hidden">
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
              <button
                onClick={() => setVisibleProjects(prev => prev + 3)}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Load More Projects
              </button>
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
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-white py-8 text-center">
        <h2 className="text-7xl font-semibold">MD Saidul Islam</h2>
        <p className="text-gray-400">Frontend Developer | React | Next.js</p>

        <p className="mt-2">
          📧 <a href="mailto:yourname@email.com" className="text-blue-400">yourname@email.com</a>
        </p>

        <div className="mt-4 space-x-4">
          <a href="https://github.com/yourusername" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" className="text-blue-400 hover:underline">Twitter</a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          © 2025 Saidul Islam. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
