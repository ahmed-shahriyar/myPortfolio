import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Filter } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
  {
    title: "Educational Institution Management and Analytics",
    description:
      "A full-featured management system for schools/universities with student admission, fee tracking, section management, and a powerful analytics dashboard.",
    technologies: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/ahmed-shahriyar/-Educational_Institution_Management_And-Analytics", // Replace with actual link
    live: "https://your-live-demo.com", // Replace if hosted
    image: "🎓",
  },
  {
    title: "Restaurant Management Software",
    description:
      "Comprehensive system for managing orders, customers, billing, products, and staff operations with print support.",
    technologies: ["React", "Node.js", "MySQL"],
    category: "fullstack",
    github: "https://github.com/ahmed-shahriyar/Restaurant_Management_System", // Replace with actual link
    live: null,
    image: "🍽️",
  },
  {
    title: "University Result Management System",
    description:
      "Terminal-based application built with C++ for managing student results, GPA calculation, and persistent file storage.",
    technologies: ["C++"],
    category: "terminal",
    github: "https://github.com/ahmed-shahriyar/DSA-Project", // Replace with actual link
    live: null,
    image: "📚",
  },
  {
    title: "Hotel Management System",
    description:
      "Console-based C++ application for managing room reservations, guest check-ins, billing, and overall hotel operations.",
    technologies: ["C++"],
    category: "terminal",
    github: "https://github.com/ahmed-shahriyar/Hotel_Management_System.git", // Replace with actual link
    live: null,
    image: "🏨",
  },
];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            A showcase of my development work and personal projects
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="flex items-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{project.image}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;