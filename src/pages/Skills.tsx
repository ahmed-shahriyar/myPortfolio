import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Cpu } from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skillCategories = [
    { id: "all", name: "All Skills", icon: Code },
    { id: "programming", name: "Programming", icon: Cpu },
    { id: "web", name: "Web Development", icon: Globe },
    { id: "database", name: "Database", icon: Database },
  ];

  const skills = [
    {
      name: "C++",
      level: 90,
      category: "programming",
      description: "Competitive programming, Data structures, Algorithms",
    },
    {
      name: "JavaScript",
      level: 85,
      category: "programming",
      description: "ES6+, Async/Await, Modern JavaScript features",
    },
    {
      name: "Python",
      level: 80,
      category: "programming",
      description: "Scripting, Data analysis, Algorithm implementation",
    },
    {
      name: "React",
      level: 85,
      category: "web",
      description: "Hooks, Context API, Component lifecycle",
    },
    {
      name: "Node.js",
      level: 75,
      category: "web",
      description: "Express.js, RESTful APIs, Server-side development",
    },
    {
      name: "HTML/CSS",
      level: 90,
      category: "web",
      description: "Responsive design, Flexbox, Grid, Animations",
    },
    {
      name: "MySQL",
      level: 70,
      category: "database",
      description: "Database design, Queries, Optimization",
    },
    {
      name: "MongoDB",
      level: 65,
      category: "database",
      description: "NoSQL, Document-based storage, Aggregation",
    },
  ];

  const languages = [
    { name: "English", level: "Fluent", flag: "🇺🇸" },
    { name: "Bangla", level: "Native", flag: "🇧🇩" },
  ];

  const tools = [
    "Git & GitHub",
    "VS Code",
    "Postman",
    "Chrome DevTools",
    "Linux/Ubuntu",
    "npm/yarn",
    "Webpack",
    "Tailwind CSS",
  ];

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-medium"
                    : "bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {filteredSkills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                  <Badge variant="secondary" className="font-medium">
                    {skill.level}%
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <Progress 
                    value={skill.level} 
                    className="h-3"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">{skill.description}</p>
                
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getSkillColor(skill.level)}`} />
                    <span className="text-xs text-muted-foreground">
                      {skill.level >= 80 ? "Advanced" : skill.level >= 60 ? "Intermediate" : "Beginner"}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Tools */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Languages */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center lg:text-left">
                <Globe className="inline h-8 w-8 mr-3 text-primary" />
                Languages
              </h2>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <Card key={language.name} className="p-6 hover:shadow-medium transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl">{language.flag}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{language.name}</h3>
                          <p className="text-muted-foreground">{language.level}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{language.level}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center lg:text-left">
                <Code className="inline h-8 w-8 mr-3 text-primary" />
                Tools & Technologies
              </h2>
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div 
                      key={tool}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-hero hover:bg-accent transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium text-foreground">{tool}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Continuous <span className="text-primary">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I believe in staying updated with the latest technologies and continuously improving my skills. 
            Currently, I'm focusing on advanced algorithms, system design, and modern web development practices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">Focus on algorithmic thinking and optimization</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-semibold text-foreground mb-2">Modern Development</h3>
              <p className="text-sm text-muted-foreground">Latest frameworks and best practices</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-medium transition-all duration-300">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-semibold text-foreground mb-2">Always Learning</h3>
              <p className="text-sm text-muted-foreground">Exploring new technologies and concepts</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;