import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  MapPin, 
  Sprout, 
  TrendingUp, 
  Cloud, 
  ShoppingCart,
  Calendar,
  BarChart3,
  Leaf,
  DollarSign,
  Package
} from "lucide-react";

const Dashboard = () => {
  // Mock farmer data
  const farmerData = {
    name: "Ravi Kumar",
    village: "Kuttanad",
    city: "Alappuzha",
    lands: [
      { location: "Near Temple", size: "2.5 hectares", soil: "Alluvial Soil", currentCrop: "Rice (Paddy)" },
      { location: "Backyard Plot", size: "0.8 hectares", soil: "Clay Soil", currentCrop: "Coconut" }
    ]
  };

  const aiRecommendations = [
    { crop: "Rice (Paddy)", profit: "₹45,000", season: "Kharif", confidence: "95%" },
    { crop: "Coconut", profit: "₹32,000", season: "Year Round", confidence: "88%" },
    { crop: "Pepper", profit: "₹28,000", season: "Post Monsoon", confidence: "82%" }
  ];

  const vendors = [
    { name: "Kerala Agro Corp", rating: "4.8", crops: "Rice, Coconut", phone: "+91 98765 43210" },
    { name: "Spice Trade Kerala", rating: "4.6", crops: "Pepper, Cardamom", phone: "+91 98765 43211" },
    { name: "Fresh Harvest Co", rating: "4.7", crops: "Vegetables, Fruits", phone: "+91 98765 43212" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary/10 text-primary text-lg">
                {farmerData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {farmerData.name}!</h1>
              <p className="text-muted-foreground flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{farmerData.village}, {farmerData.city}</span>
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 glass">
              <div className="flex items-center space-x-3">
                <Sprout className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Land</p>
                  <p className="text-2xl font-bold">3.3 Ha</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 glass">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Expected Profit</p>
                  <p className="text-2xl font-bold">₹77,000</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 glass">
              <div className="flex items-center space-x-3">
                <Cloud className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Weather</p>
                  <p className="text-2xl font-bold">Perfect</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 glass">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-8 w-8 text-green-400" />
                <div>
                  <p className="text-sm text-muted-foreground">Productivity</p>
                  <p className="text-2xl font-bold">+45%</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Recommendations */}
            <Card className="p-6 glass">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span>AI Crop Recommendations</span>
              </h2>
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-semibold">{rec.crop}</p>
                      <p className="text-sm text-muted-foreground">{rec.season} Season</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent">{rec.profit}</p>
                      <p className="text-sm text-primary">{rec.confidence} confidence</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Weather Forecast */}
            <Card className="p-6 glass">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Cloud className="h-6 w-6 text-blue-400" />
                <span>6-Month Weather Forecast</span>
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Jan-Feb</p>
                    <p className="text-sm text-muted-foreground">Dry Season</p>
                    <p className="text-primary">Good for Rice</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Mar-Apr</p>
                    <p className="text-sm text-muted-foreground">Pre-Monsoon</p>
                    <p className="text-accent">Plant Pepper</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">May-Jun</p>
                    <p className="text-sm text-muted-foreground">Monsoon</p>
                    <p className="text-blue-400">Perfect Growth</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Vendor Marketplace */}
          <Card className="p-6 glass">
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-accent" />
              <span>Vendor Marketplace</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {vendors.map((vendor, index) => (
                <Card key={index} className="p-4 border-muted">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{vendor.name}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        ⭐ {vendor.rating}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{vendor.crops}</p>
                    <p className="text-sm">{vendor.phone}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Contact Vendor
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;