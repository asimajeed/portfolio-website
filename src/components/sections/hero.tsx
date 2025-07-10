import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingElements } from '@/components/ui/floating-elements';
import { AnimatedText } from '@/components/ui/animated-text';
import { ParallaxContainer } from '@/components/ui/parallax-container';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      <ParallaxContainer speed={-0.3} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950"></div>
      </ParallaxContainer>
      
      {/* 3D geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxContainer speed={0.2}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
        </ParallaxContainer>
        <ParallaxContainer speed={-0.1}>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-600/20 transform rotate-45 blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        </ParallaxContainer>
        <ParallaxContainer speed={0.3}>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-lg transform rotate-12 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </ParallaxContainer>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <AnimatedText 
              text="Saiyed Asim Majeed"
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white"
            />
            <AnimatedText 
              text="Software Developer (AI & Web)"
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
              delay={500}
            />
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Determined and analytical developer skilled in debugging and solving complex problems 
              to deliver robust, scalable applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-12 w-12 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu"
              >
                <a href="mailto:asimmajeed202@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-12 w-12 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform-gpu"
              >
                <a href="https://github.com/asimajeed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-12 w-12 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 transform-gpu"
              >
                <a href="https://linkedin.com/in/saiyed-asim-majeed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex space-x-4">
              <Button size="lg" onClick={scrollToAbout} className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform-gpu">
                Get to know me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform-gpu"
              >
                Let's talk
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ParallaxContainer speed={0.1} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="h-12 w-12 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform-gpu"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
        </div>
      </ParallaxContainer>
    </section>
  );
}