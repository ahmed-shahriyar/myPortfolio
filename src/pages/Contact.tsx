import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (frontend only)
    console.log("Form submitted:", formData);
    alert("Message sent! (Frontend demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/ahmed-shahriyar", color: "hover:text-gray-900" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ahmed-shahriyar-655831174/", color: "hover:text-blue-600" },
    { name: "Email", icon: Mail, url: "mailto:mdshahariyar8@gmail.com", color: "hover:text-red-500" },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Let's connect and discuss opportunities or collaborations
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 text-muted-foreground transition-colors ${link.color}`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Let's Collaborate</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always interested in new opportunities, whether it's for internships, 
                  freelance projects, or open source contributions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Bangladesh</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>mdshahariyar8@gmail.com</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;