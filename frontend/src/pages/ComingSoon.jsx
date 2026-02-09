import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Facebook, Heart, Sparkles, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import {
  brandInfo,
  heroContent,
  aboutContent,
  productPreviews,
  waitlistBenefits,
} from '../data/mock';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { toast } = useToast();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date(brandInfo.launchDate).getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the exclusive waitlist!",
        description: "You'll be among the first to experience our collection.",
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-sm border-b border-[#8B7D6B]/10">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#C4B5A0] rounded-full flex items-center justify-center">
              <span className="text-[#FAF9F7] font-serif text-lg">E</span>
            </div>
            <div>
              <h1 className="font-serif text-xl text-[#2C2C2C] tracking-tight">EveryRozLife</h1>
              <p className="text-[10px] text-[#8B7D6B] tracking-widest uppercase">Fashion Brand</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm text-[#2C2C2C] hover:text-[#C4B5A0] tracking-wider uppercase transition-colors duration-300">About</a>
            <a href="#collection" className="text-sm text-[#2C2C2C] hover:text-[#C4B5A0] tracking-wider uppercase transition-colors duration-300">Collection</a>
            <a href="#waitlist" className="text-sm text-[#2C2C2C] hover:text-[#C4B5A0] tracking-wider uppercase transition-colors duration-300">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#C4B5A0]/10 rounded-full">
                <Sparkles className="w-4 h-4 text-[#C4B5A0]" />
                <span className="text-xs text-[#6B4E37] tracking-widest uppercase">Launching Soon</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl text-[#2C2C2C] leading-tight tracking-tight">
                {heroContent.title}
              </h2>
              <p className="text-xl text-[#6B4E37] font-serif italic">
                {heroContent.subtitle}
              </p>
              <p className="text-[#8B7D6B] leading-relaxed">
                {heroContent.description}
              </p>
              <Button 
                onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#C4B5A0] hover:bg-[#6B4E37] text-[#FAF9F7] px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300"
              >
                Join the Waitlist
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={heroContent.image} 
                  alt="Chikankari Kurta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#FAF9F7] p-6 rounded-lg shadow-xl border border-[#8B7D6B]/10">
                <p className="text-xs text-[#8B7D6B] tracking-widest uppercase mb-2">Handcrafted</p>
                <p className="font-serif text-2xl text-[#2C2C2C]">Artisan Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 bg-[#D4C4B0]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Clock className="w-5 h-5 text-[#C4B5A0]" />
            <p className="text-sm text-[#6B4E37] tracking-widest uppercase">Launching In</p>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-[#FAF9F7] p-6 rounded-lg text-center shadow-md">
                <p className="font-serif text-4xl text-[#2C2C2C] mb-2">{value}</p>
                <p className="text-xs text-[#8B7D6B] tracking-widest uppercase">{unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={aboutContent.image} 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <div>
                <p className="text-xs text-[#C4B5A0] tracking-widest uppercase mb-4">
                  {aboutContent.subtitle}
                </p>
                <h3 className="font-serif text-4xl text-[#2C2C2C] mb-6">
                  {aboutContent.title}
                </h3>
                <p className="text-[#8B7D6B] leading-relaxed mb-8">
                  {aboutContent.description}
                </p>
              </div>
              <div className="space-y-6">
                {aboutContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Heart className="w-5 h-5 text-[#C4B5A0] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-[#2C2C2C] mb-1">{feature.title}</h4>
                      <p className="text-sm text-[#8B7D6B]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section id="collection" className="py-32 bg-[#F5F3F0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs text-[#C4B5A0] tracking-widest uppercase mb-4">Sneak Peek</p>
            <h3 className="font-serif text-4xl text-[#2C2C2C] mb-6">A Glimpse of Our Collection</h3>
            <p className="text-[#8B7D6B] max-w-2xl mx-auto">
              Explore the artistry and elegance that awaits. Each piece is a celebration of traditional craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productPreviews.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-[#FAF9F7]">
                  <p className="text-xs text-[#C4B5A0] tracking-widest uppercase mb-2">
                    {product.category}
                  </p>
                  <h4 className="font-serif text-xl text-[#2C2C2C] mb-2">{product.name}</h4>
                  <p className="text-sm text-[#8B7D6B]">{product.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 bg-[#D4C4B0]/20 border-none shadow-xl">
              <div className="text-center mb-8">
                <h3 className="font-serif text-4xl text-[#2C2C2C] mb-4">
                  Join Our Exclusive Waitlist
                </h3>
                <p className="text-[#8B7D6B]">
                  Be among the first to experience our curated collection
                </p>
              </div>
              <div className="space-y-6 mb-8">
                {waitlistBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-[#C4B5A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#FAF9F7] text-xs">✓</span>
                    </div>
                    <p className="text-sm text-[#2C2C2C]">{benefit}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <Input 
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-[#FAF9F7] border-[#8B7D6B]/20 focus:border-[#C4B5A0] text-[#2C2C2C] placeholder:text-[#8B7D6B]"
                />
                <Button 
                  type="submit"
                  className="w-full bg-[#C4B5A0] hover:bg-[#6B4E37] text-[#FAF9F7] py-6 text-sm tracking-widest uppercase transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Reserve Your Spot
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#2C2C2C]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-serif text-2xl text-[#FAF9F7] mb-2">EveryRozLife</h4>
              <p className="text-xs text-[#8B7D6B] tracking-widest uppercase">Fashion Brand</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#8B7D6B]/20 text-center">
            <p className="text-sm text-[#8B7D6B]">
              © 2025 EveryRozLife. Crafted with passion for timeless elegance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
