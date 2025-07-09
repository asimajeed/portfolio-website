import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card3D } from '@/components/ui/3d-card';
import { ParallaxContainer } from '@/components/ui/parallax-container';
import { ExternalLink, Github, Plane, Zap, Smartphone, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: 'Airline Ticket MIS',
    description: 'A comprehensive full-stack web application for airline ticket management with search, booking, modification, and cancellation functionality.',
    longDescription: 'Designed and developed a full stack web application for airline ticket management, which supports search, booking, modification, and cancellation functionality. Created an admin dashboard for managing user profiles and bookings while generating analytical reports to assist in decision-making. Focused on building a robust system capable of handling simulated high-load scenarios.',
    icon: Plane,
    technologies: ['React', 'Express', 'PostgreSQL'],
    color: 'bg-blue-500'
  },
  {
    title: 'Wireless House Power Meter',
    description: 'IoT energy monitoring system that helps households reduce electricity bills by 15% through intelligent usage tracking and optimization.',
    longDescription: 'Developed a multi-phase IoT energy monitor with ESP32 and current sensors for real-time power tracking. Built Python & Node based AWS Lambda Functions using AWS API Gateway to compute kWh usage, peak/off-peak costs, and trend analytics realtime uploaded MongoDB data. Created a responsive React TypeScript dashboard for live monitoring and historical insights, configuring settings and Over-The-Air app updates.',
    icon: Zap,
    technologies: ['React', 'AWS', 'MongoDB', 'pandas', 'ESP32', 'Python'],
    color: 'bg-green-500'
  },
  {
    title: 'Native Time Table App',
    description: 'Mobile application for university timetable navigation with intelligent parsing and search functionality.',
    longDescription: 'Developed a mobile app to streamline university timetable navigation by parsing and displaying FAST NUCES timetables from Excel sheets. Implemented user-friendly search functionality to quickly locate course schedules. Ensured robust, cross-platform performance with React Native and Expo Router.',
    icon: Smartphone,
    technologies: ['React Native', 'Expo Router', 'TypeScript'],
    color: 'bg-purple-500'
  },
  {
    title: 'Point of Sale Terminal',
    description: 'GUI-based POS system with inventory management, checkout workflows, and dynamic receipt generation.',
    longDescription: 'Designed a GUI-based POS system that includes inventory management, checkout workflows, and dynamic receipt generation. Emphasized a robust and stable interface using GTK3 and Glade, suitable for handling typical retail transactions.',
    icon: ShoppingCart,
    technologies: ['C', 'GTK3', 'Glade'],
    color: 'bg-orange-500'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my work in web development, mobile apps, and IoT systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="flex">
              <Card3D className="w-full">
                <Card className="hover:shadow-xl transition-all duration-300 group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className={`p-3 rounded-lg ${project.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 transform-gpu flex-shrink-0`}>
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="line-clamp-2">{project.title}</span>
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Card3D>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform-gpu"
          >
            <a href="https://github.com/asimajeed" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}