import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, 
  Code, Palette, Database, Server, Globe, Smartphone, 
  Calendar, Award, GraduationCap, Briefcase, User, Grid3X3,
  ChevronRight, Star, Eye
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(9);

  // Circular progress component
  const CircularProgress = ({ percentage, skill }) => {
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
    { name: 'Python', level: 78 },
    { name: 'PHP', level: 82 }
  ];

  const professionalSkills = [
    { name: 'Web Design', level: 90 },
    { name: 'Web Development', level: 95 },
    { name: 'Graphic Design', level: 75 },
    { name: 'SEO', level: 80 }
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
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">MD Saiful Islam</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                MD Saiful Islam
              </h1>
              <p className="text-xl text-blue-600 mb-6">Web Developer</p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">Dhaka, Bangladesh</span>
              </div>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                  <Github className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5 text-gray-600" />
                </a>
                <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors">
                  <Phone className="w-5 h-5 text-gray-600" />
                </a>
              </div>

              <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="MD Saiful Islam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full">
                  <Code className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-8">
                <div className="w-64 h-64 mx-auto">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="50" cy="60" r="8" fill="#3b82f6" opacity="0.6" />
                    <circle cx="150" cy="80" r="6" fill="#f59e0b" opacity="0.7" />
                    <circle cx="170" cy="140" r="10" fill="#10b981" opacity="0.5" />
                    <circle cx="30" cy="150" r="7" fill="#ef4444" opacity="0.6" />
                    
                    <g transform="translate(100, 100)">
                      <circle cx="0" cy="-30" r="25" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
                      <rect x="-15" y="-10" width="30" height="35" rx="15" fill="#3b82f6"/>
                      <circle cx="-25" cy="0" r="8" fill="#fbbf24"/>
                      <circle cx="25" cy="0" r="8" fill="#fbbf24"/>
                      <rect x="-10" y="20" width="8" height="20" rx="4" fill="#1f2937"/>
                      <rect x="2" y="20" width="8" height="20" rx="4" fill="#1f2937"/>
                      <circle cx="-8" cy="-35" r="2" fill="#1f2937"/>
                      <circle cx="8" cy="-35" r="2" fill="#1f2937"/>
                      <path d="M -5,-25 Q 0,-20 5,-25" stroke="#1f2937" strokeWidth="2" fill="none"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a passionate web developer with over 5 years of experience in creating 
                beautiful and functional websites. My expertise lies in front-end and back-end 
                development using modern technologies like React, Node.js, and various databases.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                I believe in writing clean, maintainable code and creating user experiences 
                that are both intuitive and engaging. When I'm not coding, I enjoy exploring 
                new technologies and contributing to open-source projects.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Age:</h4>
                  <p className="text-gray-600">28</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Residence:</h4>
                  <p className="text-gray-600">Dhaka</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Address:</h4>
                  <p className="text-gray-600">Bangladesh</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">E-mail:</h4>
                  <p className="text-gray-600">saiful@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Phone:</h4>
                  <p className="text-gray-600">+880 123 456 789</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Freelance:</h4>
                  <p className="text-green-600">Available</p>
                </div>
              </div>
            </div>
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
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-8">
                {professionalSkills.map((skill, index) => (
                  <CircularProgress key={index} percentage={skill.level} skill={skill.name} />
                ))}
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
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-white rounded-full p-2 shadow-sm">
              {['all', 'web', 'mobile', 'design'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      <button className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
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
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600">saiful@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600">+880 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-800">Address</h4>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <Github className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a>
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MD Saiful Islam</h3>
              <p className="text-gray-300 mb-4">
                Passionate web developer creating beautiful and functional digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Web Design</span></li>
                <li><span className="text-gray-300">Web Development</span></li>
                <li><span className="text-gray-300">Mobile Apps</span></li>
                <li><span className="text-gray-300">UI/UX Design</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MD Saiful Islam. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;