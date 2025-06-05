
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Electronics</span>
            <br />
            <span className="text-white">Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Passionate about designing innovative electronic systems and embedded solutions
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-blue-600/20 transition-all duration-300 glow-effect hover:scale-110"
            >
              <Github size={24} className="text-slate-300 hover:text-blue-400" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-blue-600/20 transition-all duration-300 glow-effect hover:scale-110"
            >
              <Linkedin size={24} className="text-slate-300 hover:text-blue-400" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800/50 rounded-full hover:bg-blue-600/20 transition-all duration-300 glow-effect hover:scale-110"
            >
              <Mail size={24} className="text-slate-300 hover:text-blue-400" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
