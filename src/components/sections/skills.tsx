import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Card3D } from '@/components/ui/3d-card';
import { ParallaxContainer } from '@/components/ui/parallax-container';
import { Code, Database, Brain, PenTool as Tool, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C/C++', 'Python', 'JavaScript', 'TypeScript'],
    color: 'bg-blue-500'
  },
  {
    title: 'Web Development',
    icon: Code,
    skills: ['React', 'Node.js', 'Express', 'Flask', 'REST APIs', 'Swagger'],
    color: 'bg-green-500'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Oracle', 'Supabase'],
    color: 'bg-purple-500'
  },
  {
    title: 'Data Science & Analytics',
    icon: Brain,
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
    color: 'bg-orange-500'
  },
  {
    title: 'Tools & DevOps',
    icon: Tool,
    skills: ['Docker', 'Git', 'Linux', 'Jupyter Notebook', 'Figma', 'AWS EC2', 'S3', 'RDS'],
    color: 'bg-red-500'
  },
  {
    title: 'Certifications',
    icon: Award,
    skills: ['Intermediate Python', 'Data Manipulation with Python', 'Understanding Machine Learning', 'Supervised Learning with scikit-learn'],
    color: 'bg-indigo-500'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="flex">
              <Card3D className="w-full">
                <Card className="hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`p-2.5 rounded-lg ${category.color} transform transition-transform duration-300 hover:rotate-12 hover:scale-110`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="truncate">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}