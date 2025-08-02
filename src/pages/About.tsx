import { GraduationCap, Heart, Target, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const timeline = [
    {
      year: "2022",
      title: "Started CSE Journey",
      description: "Began my Computer Science and Engineering degree, discovering my passion for programming and problem-solving.",
    },
    {
      year: "2023",
      title: "Competitive Programming",
      description: "Started participating in competitive programming contests on various platforms like Codeforces and LeetCode.",
    },
    {
      year: "2024",
      title: "Full Stack Development",
      description: "Expanded into web development, learning React, Node.js, and building real-world applications.",
    },
  ];

  const interests = [
    "Competitive Programming",
    "Data Structures & Algorithms",
    "Web Development",
    "Open Source Contribution",
    "Problem Solving",
    "Software Engineering",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate Computer Science and Engineering student who loves solving complex problems 
                and building innovative solutions. My journey in tech has been driven by curiosity and a 
                desire to create meaningful impact through code.
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Profile Image Placeholder */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-primary p-1">
                  <div className="w-full h-full bg-gradient-card rounded-2xl flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-200 rounded-full opacity-20 animate-float" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-violet-300 rounded-lg opacity-20 animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Goals */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Bachelor of Science in CSE</h4>
                  <p className="text-muted-foreground">Currently pursuing</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Focusing on Data Structures, Algorithms, Software Engineering, and Web Technologies
                  </p>
                </div>
              </div>
            </Card>

            {/* Goals */}
            <Card className="p-8 hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Goals</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Become a skilled software engineer</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Master competitive programming</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Contribute to open source projects</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Build impactful applications</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
            My <span className="text-primary">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary opacity-20" />
            
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white font-bold text-lg mr-6 relative z-10">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="flex-1 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-background rounded-lg p-6 shadow-soft">
                    <div className="flex items-center mb-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium mr-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Beyond <span className="text-primary">Coding</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, reading tech blogs, and participating in 
            coding communities. I believe in continuous learning and sharing knowledge with fellow developers. 
            I speak both English and Bangla fluently, which helps me connect with a diverse community of developers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4">
              <div className="text-2xl mb-2">🌟</div>
              <p className="text-sm text-muted-foreground">Always Learning</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🤝</div>
              <p className="text-sm text-muted-foreground">Team Player</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">💡</div>
              <p className="text-sm text-muted-foreground">Problem Solver</p>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm text-muted-foreground">Goal Oriented</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;