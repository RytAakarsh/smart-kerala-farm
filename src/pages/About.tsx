import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Target, 
  Award, 
  Sprout,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Heart
} from "lucide-react";

const About = () => {
  const mission = [
    "Empower Kerala farmers with cutting-edge AI technology",
    "Increase crop yields through data-driven insights",
    "Build sustainable farming communities",
    "Preserve traditional knowledge while embracing innovation",
  ];

  const team = [
    {
      name: "Smart India Hackathon Team",
      role: "AI & Agricultural Innovation",
      description: "Passionate developers and agricultural experts working together to revolutionize farming in Kerala."
    }
  ];

  const achievements = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "10,000+ Farmers",
      description: "Empowered across Kerala with our AI solutions"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "85% Yield Increase",
      description: "Average improvement in crop productivity"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "500+ Villages",
      description: "Connected through our platform"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "SIH 2025",
      description: "Developed for Smart India Hackathon"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4" />
              <span>Made with ❤️ for Kerala Farmers</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              About <span className="text-gradient-primary">Smart Krishi Bharat</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to revolutionize agriculture in Kerala through AI-powered 
              technology, empowering farmers with the tools they need to thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-12 glass border-primary/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Solving Real <span className="text-gradient-harvest">Agricultural Challenges</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Unpredictable Weather Patterns</h3>
                      <p className="text-muted-foreground">Our AI provides 6-month weather forecasting and irrigation alerts to help farmers plan better.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Pest and Disease Management</h3>
                      <p className="text-muted-foreground">Computer vision technology enables early detection of pests and diseases, reducing crop loss.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Soil Degradation</h3>
                      <p className="text-muted-foreground">AI-driven insights recommend smart crop rotation and sustainable farming practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Market Access</h3>
                      <p className="text-muted-foreground">Direct marketplace connecting farmers with vendors, eliminating middlemen.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 grow-effect">
                    <Brain className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">AI-Powered</h3>
                    <p className="text-sm text-muted-foreground">Advanced machine learning algorithms</p>
                  </Card>
                  <Card className="p-6 grow-effect mt-8">
                    <Target className="h-8 w-8 text-accent mb-3" />
                    <h3 className="font-semibold mb-2">Targeted Solutions</h3>
                    <p className="text-sm text-muted-foreground">Personalized for each farm</p>
                  </Card>
                </div>
                <div className="absolute inset-0 -z-10">
                  <div className="w-48 h-48 bg-primary/5 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 float"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Our <span className="text-gradient-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming Kerala's agricultural landscape through innovation and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mission.map((item, index) => (
              <Card key={index} className="p-6 glass grow-effect">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Sprout className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">{item}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Our <span className="text-gradient-harvest">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results that make a difference in farmers' lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 glass grow-effect text-center">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto text-primary">
                    {achievement.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-12 glass border-primary/20">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold">
                Cutting-Edge <span className="text-gradient-primary">Technology</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Frontend Technology</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• React.js for responsive UI</p>
                    <p>• TailwindCSS for modern styling</p>
                    <p>• Multilingual support (Malayalam + English)</p>
                    <p>• Voice API integration</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">AI & Machine Learning</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• TensorFlow/PyTorch models</p>
                    <p>• Computer vision for pest detection</p>
                    <p>• Predictive analytics</p>
                    <p>• Custom AI chatbots</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Backend & Database</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• Supabase for authentication</p>
                    <p>• MongoDB for farm data</p>
                    <p>• Cloud APIs integration</p>
                    <p>• Real-time data processing</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Meet Our <span className="text-gradient-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated to revolutionizing agriculture in Kerala
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-8 glass text-center">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass border-primary/20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Join the Agricultural Revolution
              </h2>
              <p className="text-xl text-muted-foreground">
                Be part of Kerala's smart farming future. Start your journey with 
                Smart Krishi Bharat today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button variant="hero" size="lg" className="group">
                    Get Started Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Smart Krishi Bharat</span>
          </div>
          <p className="text-muted-foreground">
            &copy; 2025 Smart Krishi Bharat. Empowering Kerala farmers with AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;