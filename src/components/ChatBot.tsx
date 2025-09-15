import { useState, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  language: 'en' | 'ml';
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ml'>('en');
  const [showNotification, setShowNotification] = useState(true);

  const welcomeMessages = {
    en: "Hello! How may I help you with your farming needs today?",
    ml: "നമസ്കാരം! ഇന്ന് നിങ്ങളുടെ കൃഷി ആവശ്യങ്ങളിൽ ഞാൻ എങ്ങനെ സഹായിക്കാം?"
  };

  useEffect(() => {
    // Show notification popup after 3 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: welcomeMessages[currentLanguage],
        isUser: false,
        timestamp: new Date(),
        language: currentLanguage
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, currentLanguage]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
      language: currentLanguage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        en: [
          "I understand your concern. Let me help you with that farming question.",
          "Based on your query, I recommend checking soil moisture levels first.",
          "For pest control, I suggest using organic methods. Would you like specific recommendations?",
          "Weather conditions are crucial for farming. Let me check the forecast for your area.",
        ],
        ml: [
          "നിങ്ങളുടെ ആശങ്ക ഞാൻ മനസ്സിലാക്കുന്നു. ആ കൃഷി ചോദ്യത്തിൽ ഞാൻ സഹായിക്കാം.",
          "നിങ്ങളുടെ ചോദ്യത്തിന്റെ അടിസ്ഥാനത്തിൽ, ആദ്യം മണ്ണിലെ ഈർപ്പം പരിശോധിക്കാൻ ഞാൻ ശുപാർശ ചെയ്യുന്നു.",
          "കീടനിയന്ത്രണത്തിന്, ജൈവ രീതികൾ ഉപയോഗിക്കാൻ ഞാൻ നിർദ്ദേശിക്കുന്നു. നിർദ്ദിഷ്ട ശുപാർശകൾ വേണോ?",
          "കാലാവസ്ഥാ സാഹചര്യങ്ങൾ കൃഷിക്ക് നിർണായകമാണ്. നിങ്ങളുടെ പ്രദേശത്തെ കാലാവസ്ഥാ പ്രവചനം ഞാൻ പരിശോധിക്കാം.",
        ]
      };
      
      const randomResponse = responses[currentLanguage][Math.floor(Math.random() * responses[currentLanguage].length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
        language: currentLanguage
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Notification Popup */}
      {showNotification && !isOpen && (
        <div className="fixed bottom-24 right-6 max-w-sm z-50 animate-fade-in">
          <Card className="p-4 glass border-primary/20 relative">
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted/50"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary">
                {currentLanguage === 'en' ? 'How may I help?' : 'ഞാൻ എങ്ങനെ സഹായിക്കാം?'}
              </p>
              <p className="text-xs text-muted-foreground">
                {currentLanguage === 'en' 
                  ? 'Ask me anything about farming, weather, or crops!'
                  : 'കൃഷി, കാലാവസ്ഥ, അല്ലെങ്കിൽ വിളകളെക്കുറിച്ച് എന്തും ചോദിക്കൂ!'
                }
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary-glow rounded-full flex items-center justify-center z-50 grow-effect pulse-glow"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] z-50 animate-scale-in">
          <Card className="h-full flex flex-col glass border-primary/20">
            {/* Header */}
            <div className="p-4 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Smart Krishi Assistant</h3>
                  <p className="text-xs text-muted-foreground">
                    {currentLanguage === 'en' ? 'Online' : 'ഓൺലൈൻ'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentLanguage(currentLanguage === 'en' ? 'ml' : 'en')}
                  className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground hover:bg-primary/10 hover:text-primary"
                >
                  {currentLanguage === 'en' ? 'മലയാളം' : 'EN'}
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder={
                    currentLanguage === 'en' 
                      ? 'Type your farming question...' 
                      : 'നിങ്ങളുടെ കൃഷി ചോദ്യം ടൈപ് ചെയ്യൂ...'
                  }
                  className="flex-1"
                />
                <Button onClick={sendMessage} size="icon" variant="default">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;