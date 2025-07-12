import React from 'react';
import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-hero-bg border-t border-border">
      <div className="container-width section-padding py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div 
              className="font-bold text-2xl text-hero-text mb-4 cursor-pointer hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              &lt;Dev/&gt;
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional, 
              and user-friendly digital experiences. Always learning, always building.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-hero-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-hero-text mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>your.email@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and</span>
            <Code2 size={16} className="text-primary" />
            <span>by John Developer</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button
              onClick={scrollToTop}
              className="hover:text-primary transition-colors duration-200"
            >
              Back to Top ↑
            </button>
            <span>Built with React & TypeScript</span>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="text-center mt-8 text-xs text-muted-foreground/50">
          <p>
            "Any fool can write code that a computer can understand. 
            Good programmers write code that humans can understand." - Martin Fowler
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;