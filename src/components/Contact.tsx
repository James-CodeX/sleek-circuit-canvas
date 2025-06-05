
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData(event.currentTarget);
    formDataToSend.append("access_key", "6be9fad9-c4c4-42a5-a761-fbf31cbceb5e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to collaborate on exciting electronics projects? Let's discuss how we can work together 
            to create innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-300">john.doe@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-300">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-medium">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-slate-800/50 rounded-lg hover:bg-blue-600/20 transition-all duration-300 glow-effect hover:scale-110"
                >
                  <Github className="w-6 h-6 text-slate-300 hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-slate-800/50 rounded-lg hover:bg-blue-600/20 transition-all duration-300 glow-effect hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-slate-300 hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={onSubmit} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  placeholder="Tell me about your project or how we can collaborate..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
