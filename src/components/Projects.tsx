
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation using ESP32 microcontroller with mobile app control and voice commands.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      tech: ["ESP32", "Arduino IDE", "React Native", "Firebase"],
      github: "#",
      demo: "#"
    },
    {
      title: "Digital Signal Processor",
      description: "FPGA-based digital signal processing unit for real-time audio filtering and analysis.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      tech: ["Verilog", "Vivado", "MATLAB", "Xilinx"],
      github: "#",
      demo: "#"
    },
    {
      title: "Wireless Sensor Network",
      description: "Multi-node sensor network for environmental monitoring with data visualization dashboard.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tech: ["LoRa", "Python", "Raspberry Pi", "Django"],
      github: "#",
      demo: "#"
    },
    {
      title: "Power Supply Controller",
      description: "Intelligent power management system with efficiency optimization and remote monitoring.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      tech: ["STM32", "C++", "PCB Design", "SPICE"],
      github: "#",
      demo: "#"
    },
    {
      title: "Robotic Arm Controller",
      description: "6-DOF robotic arm with computer vision guidance and precise motion control algorithms.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tech: ["ROS", "OpenCV", "Python", "Arduino"],
      github: "#",
      demo: "#"
    },
    {
      title: "RF Communication Module",
      description: "Long-range wireless communication system for industrial applications with error correction.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
      tech: ["RF Design", "Antenna Design", "C", "Protocol Design"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in electronics engineering, 
            embedded systems, and innovative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700 card-hover animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
