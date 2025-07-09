import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";

export function About() {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Determined and analytical Software Developer skilled in debugging and solving complex problems
              to deliver robust, scalable applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Bachelor of Science in Computer Science
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        FAST National University of Computer and Emerging Sciences
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Aug 2022 - Jun 2026</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Cambridge International O/A-Levels
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">The City School</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        2020 - 2022 | 5A* in (Math, Phy, Chem, Comp, English)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Award className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Achievements</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        FDSS Database Competition Participant, FAST
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Code Sprint 2024 Competitor, Procom FAST
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Data Science Competition 2025 Competitor, Procom FAST
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      DataCamp Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Intermediate Python</Badge>
                      <Badge variant="secondary">Data Manipulation</Badge>
                      <Badge variant="secondary">Machine Learning</Badge>
                      <Badge variant="secondary">Scikit-Learn</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm passionate about continuous learning and leveraging new technologies to create high-quality
              solutions. My experience spans full-stack development, IoT systems, mobile applications, and
              data science, with a focus on building scalable and user-friendly applications.
            </p>

            <div className="flex items-center justify-center mt-6 text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Pakistan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
