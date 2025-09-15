import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { 
  Sprout, 
  Cloud, 
  BarChart3, 
  Users, 
  Smartphone,
  Brain,
  Leaf,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your farm data to provide personalized recommendations.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Weather Predictions",
      description: "6-month weather forecasting with localized data to help you plan your crops effectively.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Profit Analytics",
      description: "Real-time analytics showing which crops will give you maximum profit based on market trends.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Farmer Community",
      description: "Connect with local farmers, share experiences, and learn from each other's success stories.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Farmers Helped" },
    { number: "500+", label: "Villages Covered" },
    { number: "85%", label: "Crop Yield Increase" },
    { number: "24/7", label: "AI Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Sprout className="h-4 w-4" />
                  <span>Revolutionizing Agriculture with AI</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient-primary">Smart Farming</span>
                  <br />
                  for Kerala's
                  <br />
                  <span className="text-gradient-harvest">Future</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Empowering Kerala farmers with AI-driven insights, weather predictions, 
                  and community support. Join thousands of farmers already increasing their 
                  yields with our smart farming assistant.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button variant="hero" size="lg" className="group">
                    Start Farming Smart
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual Elements */}
            <div className="relative">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 glass grow-effect">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Crop Health</div>
                        <div className="text-sm text-muted-foreground">95% Healthy</div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 glass grow-effect mt-8">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">Profit</div>
                        <div className="text-sm text-muted-foreground">+45% This Season</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 glass grow-effect -mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-500/10 rounded-lg">
                        <Cloud className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold">Weather</div>
                        <div className="text-sm text-muted-foreground">Perfect for Rice</div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 glass grow-effect mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-green-500/10 rounded-lg">
                        <Smartphone className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <div className="font-semibold">AI Assistant</div>
                        <div className="text-sm text-muted-foreground">Available 24/7</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="w-64 h-64 bg-primary/5 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 float"></div>
                <div className="w-48 h-48 bg-accent/5 rounded-full blur-3xl absolute top-1/4 right-1/4 float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Powerful Features for
              <span className="text-gradient-primary"> Modern Farmers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your farming experience with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 glass grow-effect h-full">
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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
                Ready to Transform Your Farm?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of Kerala farmers who are already using Smart Krishi Bharat 
                to increase their yields and profits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button variant="hero" size="lg">
                    Get Started Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Smart Krishi Bharat</span>
              </div>
              <p className="text-muted-foreground">
                Empowering Kerala farmers with AI-driven agricultural solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-muted-foreground hover:text-primary">Home</Link>
                <Link to="/about" className="block text-muted-foreground hover:text-primary">About</Link>
                <Link to="/auth" className="block text-muted-foreground hover:text-primary">Get Started</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Features</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground">AI Crop Recommendations</div>
                <div className="text-muted-foreground">Weather Predictions</div>
                <div className="text-muted-foreground">Profit Analytics</div>
                <div className="text-muted-foreground">Farmer Community</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <div className="space-y-2">
                <div className="text-muted-foreground">24/7 AI Assistant</div>
                <div className="text-muted-foreground">Malayalam Support</div>
                <div className="text-muted-foreground">Expert Guidance</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Smart Krishi Bharat. Made with ❤️ for Kerala farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;