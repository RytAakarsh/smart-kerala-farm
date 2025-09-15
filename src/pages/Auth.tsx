import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import ChatBot from "@/components/ChatBot";
import { Sprout, ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LandData {
  id: string;
  location: string;
  hectares: string;
  soilType: string;
  currentCrop: string;
  hasCrop: boolean;
}

const Auth = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    mobile: "",
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    mobile: "",
    village: "",
    city: "",
    state: "Kerala",
    country: "India",
  });

  // Land data state
  const [landData, setLandData] = useState<LandData[]>([
    {
      id: "1",
      location: "",
      hectares: "",
      soilType: "",
      currentCrop: "",
      hasCrop: false,
    }
  ]);

  const soilTypes = [
    "Alluvial Soil",
    "Black Soil",
    "Red Soil", 
    "Laterite Soil",
    "Sandy Soil",
    "Clay Soil",
    "Loamy Soil",
    "Peaty Soil"
  ];

  const cropTypes = [
    "Rice (Paddy)",
    "Coconut",
    "Pepper",
    "Cardamom",
    "Tea",
    "Coffee",
    "Rubber",
    "Cashew",
    "Banana",
    "Tapioca",
    "Ginger",
    "Turmeric",
    "Vegetables",
    "None/Fallow"
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful!",
        description: "Welcome back to Smart Krishi Bharat",
      });
      // Redirect to dashboard would happen here
      window.location.href = "/dashboard";
    }, 2000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate land data
    const validLands = landData.filter(land => 
      land.location && land.hectares && land.soilType
    );
    
    if (validLands.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please add at least one land with complete information",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful!",
        description: "Welcome to Smart Krishi Bharat! Redirecting to your dashboard...",
      });
      // Redirect to dashboard would happen here
      window.location.href = "/dashboard";
    }, 2000);
  };

  const addLand = () => {
    const newLand: LandData = {
      id: Date.now().toString(),
      location: "",
      hectares: "",
      soilType: "",
      currentCrop: "",
      hasCrop: false,
    };
    setLandData([...landData, newLand]);
  };

  const removeLand = (id: string) => {
    if (landData.length > 1) {
      setLandData(landData.filter(land => land.id !== id));
    }
  };

  const updateLand = (id: string, field: keyof LandData, value: string | boolean) => {
    setLandData(landData.map(land => 
      land.id === id ? { ...land, [field]: value } : land
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center justify-center space-x-2">
              <Sprout className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Smart Krishi Bharat</h1>
            </div>
            <p className="text-muted-foreground">
              Join thousands of Kerala farmers already using our AI-powered platform
            </p>
          </div>

          {/* Auth Tabs */}
          <Card className="glass border-primary/20">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="p-6 pt-0">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="loginEmail">Email Address</Label>
                      <Input
                        id="loginEmail"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="loginMobile">Mobile Number</Label>
                      <Input
                        id="loginMobile"
                        type="tel"
                        value={loginData.mobile}
                        onChange={(e) => setLoginData({...loginData, mobile: e.target.value})}
                        placeholder="Enter your mobile number"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login to Dashboard"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button 
                      type="button" 
                      className="text-primary hover:underline"
                      onClick={() => {
                        const signupTab = document.querySelector('[value="signup"]') as HTMLElement;
                        signupTab?.click();
                      }}
                    >
                      Sign up here
                    </button>
                  </p>
                </form>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup" className="p-6 pt-0">
                <form onSubmit={handleSignup} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={signupData.name}
                          onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={signupData.email}
                          onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="mobile">Mobile Number *</Label>
                        <Input
                          id="mobile"
                          type="tel"
                          value={signupData.mobile}
                          onChange={(e) => setSignupData({...signupData, mobile: e.target.value})}
                          placeholder="Enter mobile number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="village">Village *</Label>
                        <Input
                          id="village"
                          value={signupData.village}
                          onChange={(e) => setSignupData({...signupData, village: e.target.value})}
                          placeholder="Enter your village"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City/District *</Label>
                        <Input
                          id="city"
                          value={signupData.city}
                          onChange={(e) => setSignupData({...signupData, city: e.target.value})}
                          placeholder="Enter city/district"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={signupData.state}
                          onChange={(e) => setSignupData({...signupData, state: e.target.value})}
                          placeholder="Kerala"
                          disabled
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          value={signupData.country}
                          onChange={(e) => setSignupData({...signupData, country: e.target.value})}
                          placeholder="India"
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* Land Information */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-primary">Land Information</h3>
                      <Button type="button" onClick={addLand} variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Land
                      </Button>
                    </div>

                    {landData.map((land, index) => (
                      <Card key={land.id} className="p-4 border-muted">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Land {index + 1}</h4>
                            {landData.length > 1 && (
                              <Button
                                type="button"
                                onClick={() => removeLand(land.id)}
                                variant="ghost"
                                size="sm"
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label>Location/Area Name *</Label>
                              <Input
                                value={land.location}
                                onChange={(e) => updateLand(land.id, 'location', e.target.value)}
                                placeholder="e.g., Near Village Temple"
                                required
                              />
                            </div>
                            <div>
                              <Label>Size (Hectares) *</Label>
                              <Input
                                type="number"
                                step="0.01"
                                value={land.hectares}
                                onChange={(e) => updateLand(land.id, 'hectares', e.target.value)}
                                placeholder="e.g., 2.5"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label>Soil Type *</Label>
                              <Select 
                                value={land.soilType} 
                                onValueChange={(value) => updateLand(land.id, 'soilType', value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select soil type" />
                                </SelectTrigger>
                                <SelectContent>
                                  {soilTypes.map((soil) => (
                                    <SelectItem key={soil} value={soil}>
                                      {soil}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label>Current Crop (if any)</Label>
                              <Select 
                                value={land.currentCrop} 
                                onValueChange={(value) => {
                                  updateLand(land.id, 'currentCrop', value);
                                  updateLand(land.id, 'hasCrop', value !== 'None/Fallow');
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select current crop" />
                                </SelectTrigger>
                                <SelectContent>
                                  {cropTypes.map((crop) => (
                                    <SelectItem key={crop} value={crop}>
                                      {crop}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="hero"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account & Access Dashboard"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <button 
                      type="button" 
                      className="text-primary hover:underline"
                      onClick={() => {
                        const loginTab = document.querySelector('[value="login"]') as HTMLElement;
                        loginTab?.click();
                      }}
                    >
                      Login here
                    </button>
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>By signing up, you agree to our terms of service and privacy policy.</p>
            <p className="mt-2">Need help? Chat with our AI assistant in the bottom right corner!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;