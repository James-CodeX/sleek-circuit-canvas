
import { Code, Cpu, Zap, Wrench } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming',
      icon: <Code className="w-6 h-6" />,
      items: ['C/C++', 'Python', 'MATLAB', 'Verilog', 'Assembly']
    },
    {
      category: 'Hardware',
      icon: <Cpu className="w-6 h-6" />,
      items: ['PCB Design', 'Microcontrollers', 'FPGA', 'Analog Circuits', 'Digital Design']
    },
    {
      category: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      items: ['Altium Designer', 'KiCad', 'SPICE', 'Vivado', 'Quartus']
    },
    {
      category: 'Specializations',
      icon: <Zap className="w-6 h-6" />,
      items: ['Embedded Systems', 'Signal Processing', 'Power Electronics', 'IoT', 'Automation']
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a passionate electronics engineering student with a strong foundation in both hardware and software development. 
            I love solving complex problems and creating innovative solutions that bridge the digital and physical worlds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-slate-300 mb-4">
              Currently pursuing my degree in Electronics Engineering, I've developed expertise in circuit design, 
              embedded systems, and signal processing. My passion lies in creating efficient, reliable electronic 
              systems that solve real-world problems.
            </p>
            <p className="text-slate-300 mb-6">
              Through various projects and internships, I've gained hands-on experience with modern development 
              tools and methodologies, always staying updated with the latest industry trends and technologies.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop&crop=center"
                alt="Electronics circuit board"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-slate-300 text-center italic">
                "Innovation distinguishes between a leader and a follower." - Steve Jobs
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 card-hover animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-300 text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
