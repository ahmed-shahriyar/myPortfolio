import { ArrowRight, Github, Linkedin, Mail, Code2, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TypingAnimation from "@/components/TypingAnimation";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const typingWords = ["Competitive Programmer", "C++ Coder", "React Developer", "Problem Solver"];

  const stats = [
    { icon: Code2, label: "Projects", value: "5+" },
    { icon: Trophy, label: "Problems Solved", value: "500+" },
    { icon: Users, label: "Open Source", value: "2+" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Md ŚhahaŔiyař
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12">
              <span>CSE Student • Problem Solver • Full Stack Developer</span>
            </div>
            
            <div className="text-lg sm:text-xl text-primary font-medium mb-12 h-8">
              <TypingAnimation words={typingWords} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <a
                href="https://github.com/ahmed-shahriyar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-shahriyar-655831174/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mdshahariyar8@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-violet-200 rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-violet-300 rounded-lg opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-violet-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Passionate About <span className="text-primary">Problem Solving</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm a Computer Science student with a love for competitive programming and full-stack development. 
            I enjoy tackling complex algorithms and building user-friendly applications that make a difference.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">
              Learn More About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;