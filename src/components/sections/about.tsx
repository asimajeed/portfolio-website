import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Card3D } from "@/components/ui/3d-card";
import { ParallaxContainer } from "@/components/ui/parallax-container";
import { GraduationCap, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about continuous learning and leveraging new technologies for high-quality solutions.
            </p>
          </div>

          <div className="grid gap-8 mb-8">
            <div className="flex">
              <Card3D className="w-fit mx-auto">
                <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary transition-transform duration-300 hover:scale-110 hover:rotate-12" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                      <p className="text-muted-foreground">
                        FAST National University of Computer and Emerging Sciences
                      </p>
                      <p className="text-sm text-muted-foreground">Aug 2022 - Jun 2026</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Cambridge International O/A-Levels</h3>
                      <p className="text-muted-foreground">The City School</p>
                      <p className="text-sm text-muted-foreground">2020 - 2022</p>
                      <Badge variant="secondary" className="mt-2">
                        5A* in Math, Physics, Chemistry, Computer, English
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Card3D>
            </div>
          </div>

          <div className="flex">
            <Card3D className="w-full">
              <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle>Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Determined and analytical Software Developer skilled in debugging and solving complex
                    problems to deliver robust, scalable applications. Passionate about continuous learning
                    and leveraging new technologies for high-quality solutions. With a strong foundation in
                    both AI and web development, I bring a unique perspective to creating innovative software
                    solutions that meet real-world needs.
                  </p>
                </CardContent>
              </Card>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
