
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: <Briefcase className="w-5 h-5" />,
      title: "Electronics Engineering Intern",
      company: "TechCorp Solutions",
      period: "Jun 2024 - Present",
      description: "Developed embedded systems for IoT applications and assisted in PCB design for commercial products.",
      achievements: ["Improved system efficiency by 25%", "Designed 3 successful PCB layouts", "Led a team of 2 junior interns"]
    },
    {
      type: 'education',
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Bachelor of Electronics Engineering",
      company: "University of Technology",
      period: "2022 - 2026",
      description: "Specialized in embedded systems and digital signal processing with a focus on practical applications.",
      achievements: ["GPA: 3.8/4.0", "Dean's List for 4 semesters", "Vice President, Electronics Society"]
    },
    {
      type: 'work',
      icon: <Briefcase className="w-5 h-5" />,
      title: "Research Assistant",
      company: "University Research Lab",
      period: "Jan 2024 - May 2024",
      description: "Conducted research on renewable energy systems and power electronics optimization.",
      achievements: ["Published 2 research papers", "Developed novel MPPT algorithm", "Received research excellence award"]
    },
    {
      type: 'certification',
      icon: <Award className="w-5 h-5" />,
      title: "Certified Embedded Systems Developer",
      company: "IEEE Certification",
      period: "Mar 2024",
      description: "Professional certification in embedded systems design and implementation.",
      achievements: ["Score: 95/100", "Top 5% nationally", "Valid until 2027"]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-blue-600/20 text-blue-400';
      case 'education': return 'bg-green-600/20 text-green-400';
      case 'certification': return 'bg-purple-600/20 text-purple-400';
      default: return 'bg-gray-600/20 text-gray-400';
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Experience</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My journey in electronics engineering through education, professional experience, and continuous learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getIconColor(exp.type)} flex items-center justify-center border-4 border-slate-800 relative z-10`}>
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <span className="text-blue-400 text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h4 className="text-lg text-blue-300 mb-3">{exp.company}</h4>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-slate-200">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-slate-300 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
