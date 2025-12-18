import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    'Languages': ['Core Java', 'JavaScript', 'SQL'],
    'Backend': ['Spring Boot', 'Hibernate/JPA', 'REST APIs'],
    'Frontend': ['HTML5', 'CSS3', 'Bootstrap', 'React'],
    'Database': ['MySQL', 'MS SQL Server'],
    'Tools': ['Git', 'Postman', 'VS Code']
  };

  const projects = [
    {
      title: 'Eureka Ropes - Inventory System',
      year: '2023',
      description: 'Inventory management system for tracking products, stock levels, and orders.',
      tech: ['ASP.NET', 'MS SQL Server', 'HTML/CSS'],
      points: ['Product tracking', 'Stock management', 'Report generation']
    },
    {
      title: 'Travel Agency - Booking Platform',
      year: '2022',
      description: 'Online platform for booking travel packages, hotels, and tour services.',
      tech: ['PHP', 'MySQL', 'JavaScript'],
      points: ['User authentication', 'Booking system', 'Payment integration']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-blue-600">| Akshay Lamdade | Portfolio | ReactJS</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Akshay Lamdade</h1>
         <h2 className="text-2xl md:text-3xl mb-6">Java Full Stack Developer | React & Spring Boot</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Building scalable web applications with Java, Spring Boot, and modern technologies
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100"
            >
              Contact Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600"
            >
              View Work
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://linkedin.com/in/akshay-lamdade288" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:scale-110 transition" size={28} />
            </a>
            <a href="https://github.com/Akshay-288" target="_blank" rel="noopener noreferrer">
              <Github className="hover:scale-110 transition" size={28} />
            </a>
            <a href="mailto:akshaylamdade2000@gmail.com">
              <Mail className="hover:scale-110 transition" size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Java Full Stack Developer with strong foundation in Core Java, Spring Boot, and modern web technologies. Skilled in building scalable applications using industry-standard frameworks.
              </p>
              <p className="text-gray-700 mb-6">
                With hands-on experience at Mind IT Services, I've developed web applications, designed RESTful APIs, and worked with MySQL and MS SQL Server databases.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600" />
                  <span>+91 8888607641</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600" />
                  <span>akshaylamdade2000@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Master of Computer Applications</h4>
                  <p className="text-gray-600">Shivaji University, Kolhapur</p>
                  <p className="text-blue-600 font-medium">2024</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-800">Bachelor of Computer Applications</h4>
                  <p className="text-gray-600">Shivaji University, Kolhapur</p>
                  <p className="text-blue-600 font-medium">2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white border rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Experience</h2>
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Software Developer</h3>
                <p className="text-gray-600">Mind IT Services - Sangli, Maharashtra</p>
              </div>
              <span className="text-blue-600 font-medium">March 2023 – Oct 2023</span>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Developed web applications using Java, Spring Boot, and JavaScript</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Designed and implemented RESTful APIs for frontend-backend integration</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Worked with MySQL and MS SQL Server for database design and optimization</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Used Git and GitHub for version control and code management</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span>Implemented responsive UI components using HTML, CSS, and Bootstrap</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="bg-blue-600 text-white p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm bg-white text-blue-600 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
          <div className="max-w-2xl mx-auto bg-white border rounded-lg p-8 shadow-sm">
            <p className="text-center text-gray-700 mb-6">
              Interested in working together? Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:akshaylamdade2000@gmail.com" 
                className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 transition"
              >
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-700">akshaylamdade2000@gmail.com</span>
              </a>
              <a 
                href="tel:+918888607641" 
                className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 transition"
              >
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-700">+91 8888607641</span>
              </a>
              <div className="flex items-center gap-3 p-3 border rounded">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-700">Pune, Maharashtra, India</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a 
                href="https://linkedin.com/in/akshay-lamdade288" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Akshay-288" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
  <p>© 2025 Akshay Lamdade. Portfolio Project.</p>
</footer>
    </div>
  );
};

export default Portfolio;