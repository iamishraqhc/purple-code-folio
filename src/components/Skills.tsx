import React from 'react';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/projects';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: skills.filter(skill => 
        ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Sass'].includes(skill)
      ),
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Backend", 
      skills: skills.filter(skill => 
        ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase'].includes(skill)
      ),
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    },
    {
      title: "Tools & DevOps",
      skills: skills.filter(skill => 
        ['Git', 'Docker', 'AWS', 'Vercel'].includes(skill)
      ),
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      title: "Design & Testing",
      skills: skills.filter(skill => 
        ['Figma', 'Jest', 'Cypress'].includes(skill)
      ),
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* All Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">All Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="skill-tag px-4 py-2 text-sm font-medium rounded-full animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="project-card p-6 rounded-xl border animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h4 className="font-semibold text-lg mb-4 text-center text-primary">
                {category.title}
              </h4>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`px-3 py-2 rounded-lg text-sm font-medium text-center border ${category.color} transition-all duration-200 hover:scale-105`}
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Level Indicators */}
        <div className="mt-16 bg-gradient-card p-8 rounded-2xl border border-border animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-center">Experience Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">★★★</span>
              </div>
              <h4 className="font-semibold mb-2">Expert</h4>
              <p className="text-sm text-muted-foreground">React, TypeScript, JavaScript, Node.js</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary">
                <span className="text-primary font-bold text-lg">★★</span>
              </div>
              <h4 className="font-semibold mb-2">Advanced</h4>
              <p className="text-sm text-muted-foreground">Next.js, Vue.js, MongoDB, PostgreSQL</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-muted-foreground font-bold text-lg">★</span>
              </div>
              <h4 className="font-semibold mb-2">Intermediate</h4>
              <p className="text-sm text-muted-foreground">Docker, AWS, DevOps, Testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;