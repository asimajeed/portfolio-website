import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Globe, 
  Database, 
  BarChart3, 
  Settings, 
  Cpu,
  Smartphone,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C/C++', level: 80 },
    ]
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'REST APIs', level: 90 },
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Supabase', level: 75 },
    ]
  },
  {
    title: 'Data Science',
    icon: BarChart3,
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Scikit-Learn', level: 75 },
      { name: 'Matplotlib', level: 70 },
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: Settings,
    skills: [
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'AWS', level: 70 },
    ]
  },
  {
    title: 'Mobile & IoT',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 85 },
      { name: 'ESP32', level: 80 },
      { name: 'IoT Development', level: 75 },
    ]
  }
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress 
                            value={inView ? skill.level : 0} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Flask', 'Swagger', 'Oracle', 'Jupyter', 'Figma', 'EC2', 'S3', 'RDS',
                'Seaborn', 'GTK3', 'Expo Router', 'Glade', 'Three.js', 'Tailwind CSS'
              ].map((tech, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}