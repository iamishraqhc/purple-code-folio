import React from 'react';
import { Code2, Coffee, Lightbulb, Heart } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.jpg';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding innovative solutions."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving my craft daily."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Focused",
      description: "Creating exceptional user experiences is at the heart of what I do."
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src={developerAvatar}
                alt="Developer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/30 rounded-full animate-float"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Hi there! I'm a passionate full-stack developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive, and user-friendly applications. My journey started with 
                curiosity about how websites work, and it has evolved into a deep passion for 
                crafting digital experiences that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies and best practices. When I'm not coding, you can find me 
                exploring new frameworks, contributing to open-source projects, or sharing my 
                knowledge with the developer community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently focused on React, TypeScript, and Node.js, but I'm always 
                excited to learn new technologies that can help me build better solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-card rounded-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="project-card p-6 rounded-xl border text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h4 className="font-semibold mb-2">{highlight.title}</h4>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;