import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Plane, Zap, Smartphone, Monitor } from 'lucide-react';

const projects = [
  {
    title: 'Airline Ticket MIS',
    description: 'A comprehensive full-stack web application for airline ticket management with search, booking, modification, and cancellation functionality.',
    features: [
      'Full-stack web application with React frontend',
      'Admin dashboard for user and booking management',
      'Analytical reports for decision-making',
      'High-load scenario handling capabilities'
    ],
    technologies: ['React', 'Express', 'PostgreSQL', 'Node.js'],
    icon: Plane,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Wireless House Power Meter',
    description: 'IoT energy monitoring system with ESP32 and current sensors for real-time power tracking and cost optimization.',
    features: [
      'Multi-phase IoT energy monitoring with ESP32',
      'Real-time power tracking with current sensors',
      'AWS Lambda functions for kWh and cost calculations',
      'Responsive React TypeScript dashboard',
      '15% electricity bill reduction through optimization'
    ],
    technologies: ['React', 'AWS', 'MongoDB', 'Python', 'ESP32', 'IoT'],
    icon: Zap,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    title: 'Native Time Table App',
    description: 'Mobile application for streamlining university timetable navigation with Excel parsing and search functionality.',
    features: [
      'University timetable parsing from Excel sheets',
      'User-friendly search functionality',
      'Cross-platform performance optimization',
      'Intuitive course schedule location'
    ],
    technologies: ['React Native', 'Expo Router', 'JavaScript'],
    icon: Smartphone,
    gradient: 'from-orange-500 to-red-600'
  },
  {
    title: 'Point of Sale Terminal',
    description: 'GUI-based POS system with inventory management, checkout workflows, and dynamic receipt generation.',
    features: [
      'Inventory management system',
      'Checkout workflows and processing',
      'Dynamic receipt generation',
      'Robust GTK3 interface design'
    ],
    technologies: ['C', 'GTK3', 'Glade'],
    icon: Monitor,
    gradient: 'from-purple-500 to-pink-600'
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and technical achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}